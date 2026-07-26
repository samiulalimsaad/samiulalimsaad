package ratelimit

import (
	"context"
	"fmt"
	"net/http"
	"strings"
	"sync"
	"time"
)

// --- Token Bucket ---

// TokenBucket implements the token bucket algorithm for rate limiting.
type TokenBucket struct {
	mu         sync.Mutex
	tokens     float64
	maxTokens  float64
	refillRate float64 // tokens per second
	lastRefill time.Time
}

// NewTokenBucket creates a bucket with the given capacity and refill rate.
func NewTokenBucket(capacity int, refillRatePerSecond float64) *TokenBucket {
	return &TokenBucket{
		tokens:     float64(capacity),
		maxTokens:  float64(capacity),
		refillRate: refillRatePerSecond,
		lastRefill: time.Now(),
	}
}

// Allow checks if a token is available. Returns true and consumes one token if allowed.
func (b *TokenBucket) Allow() bool {
	b.mu.Lock()
	defer b.mu.Unlock()

	b.refill()

	if b.tokens >= 1 {
		b.tokens--
		return true
	}
	return false
}

func (b *TokenBucket) refill() {
	now := time.Now()
	elapsed := now.Sub(b.lastRefill).Seconds()
	b.tokens += elapsed * b.refillRate
	if b.tokens > b.maxTokens {
		b.tokens = b.maxTokens
	}
	b.lastRefill = now
}

// --- Rate Limiter ---

// KeyFunc extracts the rate limit key from a request.
type KeyFunc func(r *http.Request) string

// Config holds rate limiter configuration.
type Config struct {
	// Capacity is the maximum burst size.
	Capacity int

	// RefillRate is tokens added per second.
	RefillRate float64

	// KeyFunc extracts the rate limit key (e.g., IP, user ID).
	KeyFunc KeyFunc

	// Message is the response body when rate limited.
	Message string
}

// DefaultKeyFunc extracts the client IP from the request.
func DefaultKeyFunc(r *http.Request) string {
	// Check X-Forwarded-For first (behind reverse proxy).
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		parts := strings.Split(xff, ",")
		return strings.TrimSpace(parts[0])
	}
	// Check X-Real-IP.
	if xri := r.Header.Get("X-Real-IP"); xri != "" {
		return strings.TrimSpace(xri)
	}
	// Fall back to RemoteAddr (strip port).
	addr := r.RemoteAddr
	if idx := strings.LastIndex(addr, ":"); idx != -1 {
		addr = addr[:idx]
	}
	return addr
}

// Limiter manages per-key rate limit buckets.
type Limiter struct {
	config  Config
	buckets sync.Map // map[string]*TokenBucket
}

// NewLimiter creates a rate limiter with the given config.
func NewLimiter(config Config) *Limiter {
	if config.Capacity <= 0 {
		config.Capacity = 60
	}
	if config.RefillRate <= 0 {
		config.RefillRate = 1.0
	}
	if config.KeyFunc == nil {
		config.KeyFunc = DefaultKeyFunc
	}
	if config.Message == "" {
		config.Message = `{"error": "rate limit exceeded"}`
	}

	l := &Limiter{config: config}

	// Start periodic cleanup of stale buckets.
	go l.cleanup(10 * time.Minute)

	return l
}

// Allow checks if the request is allowed under the rate limit.
func (l *Limiter) Allow(r *http.Request) bool {
	key := l.config.KeyFunc(r)
	bucket := l.getOrCreateBucket(key)
	return bucket.Allow()
}

func (l *Limiter) getOrCreateBucket(key string) *TokenBucket {
	if val, ok := l.buckets.Load(key); ok {
		return val.(*TokenBucket)
	}

	bucket := NewTokenBucket(l.config.Capacity, l.config.RefillRate)
	actual, _ := l.buckets.LoadOrStore(key, bucket)
	return actual.(*TokenBucket)
}

// cleanup removes buckets that haven't been accessed recently.
func (l *Limiter) cleanup(interval time.Duration) {
	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	for range ticker.C {
		l.buckets.Range(func(key, value interface{}) bool {
			bucket := value.(*TokenBucket)
			bucket.mu.Lock()
			// If bucket is full and hasn't been used in 2 intervals, remove it.
			if bucket.tokens >= bucket.maxTokens &&
				time.Since(bucket.lastRefill) > interval*2 {
				l.buckets.Delete(key)
			}
			bucket.mu.Unlock()
			return true
		})
	}
}

// --- HTTP Middleware ---

// Middleware returns an HTTP middleware that enforces rate limits.
func (l *Limiter) Middleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !l.Allow(r) {
			w.Header().Set("Content-Type", "application/json")
			w.Header().Set("Retry-After", fmt.Sprintf("%.0f", 1.0/l.config.RefillRate))
			w.WriteHeader(http.StatusTooManyRequests)
			fmt.Fprint(w, l.config.Message)
			return
		}
		next.ServeHTTP(w, r)
	})
}

// --- Example Usage ---

func Example() {
	// 25 requests per 10 minutes per IP (QR scan rate limit).
	qrLimiter := NewLimiter(Config{
		Capacity:   25,
		RefillRate: 25.0 / 600.0, // 25 tokens over 600 seconds
		KeyFunc:    DefaultKeyFunc,
		Message:    `{"error": "too many QR scans, please wait"}`,
	})

	// 1 request per minute per user+event (bKash payment rate limit).
	paymentLimiter := NewLimiter(Config{
		Capacity:   1,
		RefillRate: 1.0 / 60.0, // 1 token per 60 seconds
		KeyFunc: func(r *http.Request) string {
			userID := r.Header.Get("X-User-ID")
			eventID := r.URL.Query().Get("eventId")
			return fmt.Sprintf("payment:%s:%s", userID, eventID)
		},
		Message: `{"error": "payment attempt too frequent, please wait"}`,
	})

	mux := http.NewServeMux()
	mux.Handle("/api/scan/", qrLimiter.Middleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(`{"status": "ok"}`))
	})))
	mux.Handle("/api/events/", paymentLimiter.Middleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(`{"status": "ok"}`))
	})))

	http.ListenAndServe(":8080", mux)
}
