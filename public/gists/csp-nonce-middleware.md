# CSP Nonce Middleware Pattern (Go)

A security middleware pattern that generates a unique cryptographic nonce per request and injects it into the Content-Security-Policy header and request context.

## Problem

Content-Security-Policy (CSP) protects against XSS attacks by restricting which scripts and styles can execute. Using a nonce (number used once) per request is more secure than allowing `unsafe-inline`, but requires:
1. Generating a unique nonce per request
2. Injecting it into the CSP header
3. Making it available to templates for inline script/style tags

## Solution

```go
package middleware

import (
    "context"
    "crypto/rand"
    "encoding/base64"
    "fmt"
    "net/http"
)

type contextKey string

const nonceKey contextKey = "csp_nonce"

// CSPMiddleware generates a per-request nonce and injects it
// into both the response header and request context.
func CSPMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        // Generate 16 random bytes for the nonce
        nonceBytes := make([]byte, 16)
        if _, err := rand.Read(nonceBytes); err != nil {
            http.Error(w, "Internal Server Error", http.StatusInternalServerError)
            return
        }
        nonce := base64.StdEncoding.EncodeToString(nonceBytes)

        // Build CSP header with the nonce
        csp := fmt.Sprintf(
            "default-src 'self'; "+
                "script-src 'self' 'nonce-%s'; "+
                "style-src 'self' 'nonce-%s'; "+
                "object-src 'none'; "+
                "base-uri 'self'; "+
                "form-action 'self'; "+
                "upgrade-insecure-requests;",
            nonce, nonce,
        )
        w.Header().Set("Content-Security-Policy", csp)

        // Additional security headers
        w.Header().Set("X-Content-Type-Options", "nosniff")
        w.Header().Set("X-Frame-Options", "DENY")
        w.Header().Set("Referrer-Policy", "no-referrer")

        // Store nonce in context for template rendering
        ctx := context.WithValue(r.Context(), nonceKey, nonce)
        next.ServeHTTP(w, r.WithContext(ctx))
    })
}

// GetNonce retrieves the CSP nonce from the request context.
// Use this in template rendering to add nonce attributes to script/style tags.
func GetNonce(ctx context.Context) string {
    if nonce, ok := ctx.Value(nonceKey).(string); ok {
        return nonce
    }
    return ""
}
```

## Usage in Templates

```html
<script nonce="{{ .CSPNonce }}" src="/static/app.js"></script>
<style nonce="{{ .CSPNonce }}">
    .container { max-width: 1200px; }
</style>
```

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **16-byte random** | Sufficient entropy (128 bits) to prevent nonce guessing |
| **base64 encoding** | URL-safe, compact representation |
| **Per-request generation** | A new nonce for every request prevents reuse attacks |
| **Context propagation** | Makes nonce available to handler chain without global state |

## Trade-offs

- **Performance**: `crypto/rand` reads on every request. For high-throughput endpoints, consider a pool of pre-generated nonces.
- **Complexity**: Templates must explicitly use the nonce attribute. Legacy inline scripts without nonce support will break.
- **Immutable**: Once generated, the nonce cannot be changed mid-request. All inline scripts in the response must use the same nonce.

## When to Use This Pattern

- Building a web application with server-rendered HTML
- Serving inline scripts that can't be moved to external files
- Replacing `unsafe-inline` in your CSP policy
- Implementing defense-in-depth security
