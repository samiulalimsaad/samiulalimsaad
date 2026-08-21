package csrf

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"net/http"
	"time"
)

// --- Types ---

type contextKey string

const csrfTokenKey contextKey = "csrf_token"
const csrfNonceKey contextKey = "csp_nonce"

// Config holds CSRF middleware configuration.
type Config struct {
	// TokenLength is the byte length of the random token (before encoding).
	TokenLength int

	// CookieName is the name of the double-submit cookie.
	CookieName string

	// CookiePath sets the cookie path attribute.
	CookiePath string

	// CookieHTTPOnly controls the HttpOnly flag. Must be false for
	// double-submit pattern (JS needs to read the cookie).
	CookieHTTPOnly bool

	// CookieSecure controls the Secure flag.
	CookieSecure bool

	// CookieSameSite sets SameSite attribute.
	CookieSameSite http.SameSite

	// HeaderName is the custom header name for API requests.
	HeaderName string

	// IgnoredMethods are HTTP methods that skip CSRF validation.
	IgnoredMethods map[string]bool

	// FailureHandler is called when CSRF validation fails.
	FailureHandler http.HandlerFunc
}

// DefaultConfig returns sensible defaults for CSRF protection.
func DefaultConfig() Config {
	return Config{
		TokenLength:    32,
		CookieName:     "_csrf",
		CookiePath:     "/",
		CookieHTTPOnly: false, // Must be false for double-submit
		CookieSecure:   true,
		CookieSameSite: http.SameSiteLaxMode,
		HeaderName:     "X-CSRF-Token",
		IgnoredMethods: map[string]bool{
			http.MethodGet:     true,
			http.MethodHead:    true,
			http.MethodOptions: true,
		},
		FailureHandler: defaultFailureHandler,
	}
}

// --- Middleware ---

// Middleware implements double-submit cookie CSRF protection with CSP nonce integration.
//
// Flow:
//  1. On safe methods (GET/HEAD/OPTIONS): generate a new token, set it as a cookie,
//     store it in the request context for template rendering.
//  2. On unsafe methods (POST/PUT/DELETE/PATCH): compare the cookie value against
//     the header value. Reject if they don't match.
//
// The CSP nonce is generated per-request and made available via context for
// template rendering (script nonce, style nonce attributes).
func Middleware(config Config) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// Generate per-request CSP nonce.
			nonce, err := generateNonce(16)
			if err != nil {
				http.Error(w, "Internal Server Error", http.StatusInternalServerError)
				return
			}

			// Store nonce in context for template rendering.
			ctx := context.WithValue(r.Context(), csrfNonceKey, nonce)

			if config.IgnoredMethods[r.Method] {
				// Safe method: generate new CSRF token.
				token, err := generateNonce(config.TokenLength)
				if err != nil {
					http.Error(w, "Internal Server Error", http.StatusInternalServerError)
					return
				}

				// Set double-submit cookie.
				http.SetCookie(w, &http.Cookie{
					Name:     config.CookieName,
					Value:    token,
					Path:     config.CookiePath,
					HttpOnly: config.CookieHTTPOnly,
					Secure:   config.CookieSecure,
					SameSite: config.CookieSameSite,
					MaxAge:   3600, // 1 hour
				})

				// Store token in context for template rendering.
				ctx = context.WithValue(ctx, csrfTokenKey, token)

				next.ServeHTTP(w, r.WithContext(ctx))
				return
			}

			// Unsafe method: validate CSRF token.
			cookieToken, err := r.Cookie(config.CookieName)
			if err != nil || cookieToken.Value == "" {
				config.FailureHandler(w, r)
				return
			}

			headerToken := r.Header.Get(config.HeaderName)
			if headerToken == "" {
				// Also check form field for non-JS submissions.
				headerToken = r.FormValue("csrf_token")
			}

			if headerToken == "" || !compareTokens(cookieToken.Value, headerToken) {
				config.FailureHandler(w, r)
				return
			}

			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}

// --- Helpers ---

// GetCSRFToken retrieves the CSRF token from the request context.
// Use in templates: <input type="hidden" name="csrf_token" value="{{ .CSRFToken }}">
func GetCSRFToken(ctx context.Context) string {
	if token, ok := ctx.Value(csrfTokenKey).(string); ok {
		return token
	}
	return ""
}

// GetCSPNonce retrieves the CSP nonce from the request context.
// Use in templates: <script nonce="{{ .CSPNonce }}" src="/app.js"></script>
func GetCSPNonce(ctx context.Context) string {
	if nonce, ok := ctx.Value(csrfNonceKey).(string); ok {
		return nonce
	}
	return ""
}

// SetSecurityHeaders sets additional security headers on the response.
func SetSecurityHeaders(w http.ResponseWriter, nonce string) {
	w.Header().Set("X-Content-Type-Options", "nosniff")
	w.Header().Set("X-Frame-Options", "DENY")
	w.Header().Set("Referrer-Policy", "strict-origin-when-cross-origin")

	// Build CSP with nonce.
	csp := fmt.Sprintf(
		"default-src 'self'; "+
			"script-src 'self' 'nonce-%s'; "+
			"style-src 'self' 'nonce-%s'; "+
			"img-src 'self' data: https:; "+
			"object-src 'none'; "+
			"base-uri 'self'; "+
			"form-action 'self'; "+
			"upgrade-insecure-requests;",
		nonce, nonce,
	)
	w.Header().Set("Content-Security-Policy", csp)
}

// --- Internal ---

func generateNonce(byteLen int) (string, error) {
	b := make([]byte, byteLen)
	_, err := rand.Read(b)
	if err != nil {
		return "", err
	}
	return base64.StdEncoding.EncodeToString(b), nil
}

// compareTokens uses constant-time comparison to prevent timing attacks.
func compareTokens(a, b string) bool {
	if len(a) != len(b) {
		return false
	}
	result := 0
	for i := 0; i < len(a); i++ {
		result |= int(a[i] ^ b[i])
	}
	return result == 0
}

func defaultFailureHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusForbidden)
	fmt.Fprint(w, `{"error": "csrf token missing or invalid"}`)
}

// --- Example Usage ---

func Example() {
	config := DefaultConfig()
	config.CookieSecure = false // for local development

	mux := http.NewServeMUX()

	// Protected form endpoint.
	formHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		token := GetCSRFToken(r.Context())
		nonce := GetCSPNonce(r.Context())

		SetSecurityHeaders(w, nonce)

		w.Header().Set("Content-Type", "text/html")
		fmt.Fprintf(w, `
			<form method="POST" action="/api/submit">
				<input type="hidden" name="csrf_token" value="%s">
				<button type="submit">Submit</button>
			</form>
		`, token)
	})

	// Protected API endpoint.
	apiHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprint(w, `{"status": "ok"}`)
	})

	// Public endpoint (no CSRF check).
	healthHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(`{"status": "healthy"}`))
	})

	// Apply CSRF middleware to protected routes.
	csrfProtection := Middleware(config)

	mux.Handle("/dashboard", csrfProtection(formHandler))
	mux.Handle("/api/submit", csrfProtection(apiHandler))
	mux.Handle("/health", healthHandler) // no CSRF for GET /health

	http.ListenAndServe(":3000", mux)
}

// Suppress unused import warning.
var _ = time.Now
