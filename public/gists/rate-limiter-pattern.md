# Rate Limiter Pattern (Go)

A per-IP token bucket rate limiter using concurrent-safe maps and the Go rate package.

## Problem

APIs need protection against brute force attacks, credential stuffing, and accidental traffic spikes. A per-IP rate limiter rejects excessive requests before they reach application logic, preserving resources for legitimate users.

## Solution

```go
package middleware

import (
    "net/http"
    "sync"
    "time"

    "golang.org/x/time/rate"
)

type ipLimiter struct {
    limiter  *rate.Limiter
    lastSeen int64 // unix timestamp of last request
}

var (
    visitors = make(map[string]*ipLimiter)
    mu       sync.Mutex
)

// getLimiter returns or creates a rate limiter for the given IP.
// Create: 1 request/second with burst of 3
func getLimiter(ip string) *rate.Limiter {
    mu.Lock()
    defer mu.Unlock()

    v, exists := visitors[ip]
    if !exists {
        limiter := rate.NewLimiter(1, 3)
        visitors[ip] = &ipLimiter{
            limiter:  limiter,
            lastSeen: now(),
        }
        return limiter
    }

    v.lastSeen = now()
    return v.limiter
}

// cleanupVisitors periodically removes stale entries to prevent
// memory leaks from abandoned IPs.
func cleanupVisitors() {
    for {
        time.Sleep(10 * time.Minute)
        mu.Lock()
        for ip, v := range visitors {
            if now()-v.lastSeen > 600 { // 10 minutes without activity
                delete(visitors, ip)
            }
        }
        mu.Unlock()
    }
}

func now() int64 {
    return time.Now().Unix()
}

// StartCleanupLoop launches the periodic cleanup goroutine.
// Call once at startup, e.g.:
//
//	go middleware.StartCleanupLoop()
func StartCleanupLoop() {
    go cleanupVisitors()
}

// RateLimitMiddleware applies rate limiting to mutating HTTP methods.
func RateLimitMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        // Only rate limit mutating methods
        switch r.Method {
        case http.MethodPost, http.MethodPut, http.MethodPatch, http.MethodDelete:
            ip := r.RemoteAddr
            limiter := getLimiter(ip)

            if !limiter.Allow() {
                w.Header().Set("Retry-After", "1")
                http.Error(w, "Too Many Requests", http.StatusTooManyRequests)
                return
            }
        }

        next.ServeHTTP(w, r)
    })
}
```

## Alternative: sync.Map Version

For higher concurrency, use `sync.Map` instead of mutex-guarded map:

```go
import "sync"

var clients sync.Map

func getLimiter(ip string) *rate.Limiter {
    if limiter, ok := clients.Load(ip); ok {
        return limiter.(*rate.Limiter)
    }

    limiter := rate.NewLimiter(1, 3)
    actual, loaded := clients.LoadOrStore(ip, limiter)
    if loaded {
        return actual.(*rate.Limiter)
    }

    return limiter
}
```

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Token bucket over fixed window** | Allows short bursts while maintaining average rate |
| **Per-IP instead of per-user** | No authentication dependency, works for unauthenticated endpoints |
| **Write methods only** | Reads are typically safe to allow at higher rates |
| **sync.Map for concurrency** | Lock-free reads, suitable for high-traffic endpoints |

## Rate Limit Configuration

| Endpoint Type | Rate | Burst | Rationale |
|---------------|------|-------|-----------|
| Login form | 1/sec | 3 | Slow down brute force |
| Registration | 1/sec | 3 | Prevent account creation spam |
| Password reset | 1/10sec | 2 | Very sensitive operation |
| General API | 10/sec | 20 | Normal usage patterns |

## Trade-offs

- **Memory**: Each unique IP consumes memory. With cleanup, this is bounded by concurrent active users.
- **IP spoofing**: `RemoteAddr` may not be the real client IP behind proxies. Use `X-Forwarded-For` or `X-Real-IP` headers in production.
- **No persistence**: In-memory limiters reset on server restart. For persistent limits, use Redis.
- **Single machine**: This pattern doesn't work across multiple instances. For distributed rate limiting, use a shared Redis-backed implementation.

## When to Use This Pattern

- Simple, single-instance deployments
- Protecting login/registration endpoints
- Lightweight middleware that shouldn't add latency
- When Redis isn't available for distributed limiting
