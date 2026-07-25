# Payment Gateway Adapter Pattern (Go)

An adapter pattern that abstracts multiple payment gateways behind a unified interface, enabling easy addition of new providers without changing core business logic.

## Problem

Payment services often need to support multiple gateways for redundancy, geographic coverage, and cost optimization. Without abstraction, business logic becomes coupled to each gateway's API, authentication, and data formats — making additions and changes risky.

## Solution

```go
package payment

import (
    "context"
    "time"
)

// --- Domain Types ---

type PaymentStatus string

const (
    StatusPending   PaymentStatus = "pending"
    StatusCompleted PaymentStatus = "completed"
    StatusFailed    PaymentStatus = "failed"
    StatusRefunded  PaymentStatus = "refunded"
)

type PaymentRequest struct {
    Amount   int64  // in smallest currency unit (e.g., cents)
    Currency string // ISO 4217 (e.g., "USD", "BDT")
    Metadata map[string]string
    ID       string // idempotency key
}

type PaymentResult struct {
    GatewayTransactionID string
    Status               PaymentStatus
    RawResponse          []byte // gateway's original response for debugging
}

type RefundRequest struct {
    GatewayTransactionID string
    Amount               int64 // partial refund amount, or full if 0
    Reason               string
}

type RefundResult struct {
    RefundID string
    Status   PaymentStatus
}

// --- Gateway Interface ---

// Gateway is the unified interface all payment providers must implement.
type Gateway interface {
    Name() string
    Charge(ctx context.Context, req *PaymentRequest) (*PaymentResult, error)
    Refund(ctx context.Context, req *RefundRequest) (*RefundResult, error)
    ParseWebhook(ctx context.Context, rawBody []byte, headers map[string]string) (*WebhookEvent, error)
    HealthCheck(ctx context.Context) error
}

// WebhookEvent represents a normalized webhook event from any gateway.
type WebhookEvent struct {
    GatewayTransactionID string
    EventType            string // "payment.succeeded", "payment.failed", "refund.completed"
    Status               PaymentStatus
    RawBody              []byte
}

// --- Service Layer ---

// Service coordinates payments across multiple gateways.
type Service struct {
    gateways  map[string]Gateway
    defaultGW string
}

func NewService(gateways map[string]Gateway, defaultGW string) *Service {
    return &Service{
        gateways:  gateways,
        defaultGW: defaultGW,
    }
}

func (s *Service) Charge(ctx context.Context, gatewayName string, req *PaymentRequest) (*PaymentResult, error) {
    gw, ok := s.gateways[gatewayName]
    if !ok {
        gw = s.gateways[s.defaultGW]
    }
    return gw.Charge(ctx, req)
}

func (s *Service) Refund(ctx context.Context, gatewayName string, req *RefundRequest) (*RefundResult, error) {
    gw, ok := s.gateways[gatewayName]
    if !ok {
        return nil, fmt.Errorf("unknown gateway: %s", gatewayName)
    }
    return gw.Refund(ctx, req)
}

func (s *Service) HandleWebhook(ctx context.Context, gatewayName string, rawBody []byte, headers map[string]string) error {
    gw, ok := s.gateways[gatewayName]
    if !ok {
        return fmt.Errorf("unknown gateway: %s", gatewayName)
    }

    event, err := gw.ParseWebhook(ctx, rawBody, headers)
    if err != nil {
        return err
    }

    return s.processWebhookEvent(ctx, event)
}

func (s *Service) processWebhookEvent(ctx context.Context, event *WebhookEvent) error {
    // Update payment status in database
    // Trigger notifications
    // Handle refund reconciliation
    return nil
}
```

## Gateway Implementation Example

```go
package stripe_adapter

import (
    "context"
    "fmt"

    "your-project/payment"
    stripe "github.com/stripe/stripe-go/v82"
)

type StripeGateway struct {
    apiKey string
}

func New(apiKey string) *StripeGateway {
    stripe.Key = apiKey
    return &StripeGateway{}
}

func (g *StripeGateway) Name() string { return "stripe" }

func (g *StripeGateway) Charge(ctx context.Context, req *payment.PaymentRequest) (*payment.PaymentResult, error) {
    // Convert domain request to Stripe API call
    params := &stripe.PaymentIntentParams{
        Amount:   stripe.Int64(req.Amount),
        Currency: stripe.String(req.Currency),
    }

    intent, err := stripe.NewPaymentIntent(params)
    if err != nil {
        return nil, fmt.Errorf("stripe charge failed: %w", err)
    }

    return &payment.PaymentResult{
        GatewayTransactionID: intent.ID,
        Status:               mapStripeStatus(intent.Status),
    }, nil
}

func mapStripeStatus(status string) payment.PaymentStatus {
    switch status {
    case "succeeded":
        return payment.StatusCompleted
    case "requires_payment_method":
        return payment.StatusPending
    default:
        return payment.StatusFailed
    }
}
```

## Adding a New Gateway

```go
package bkash_adapter

type BKashGateway struct {
    apiKey    string
    apiSecret string
}

func New(apiKey, apiSecret string) *BKashGateway {
    return &BKashGateway{apiKey: apiKey, apiSecret: apiSecret}
}

func (g *BKashGateway) Name() string { return "bkash" }
// ... implement Gateway interface ...
```

Then register it:

```go
gateways := map[string]payment.Gateway{
    "stripe": stripe_adapter.New(os.Getenv("STRIPE_KEY")),
    "bkash":  bkash_adapter.New(os.Getenv("BKASH_KEY"), os.Getenv("BKASH_SECRET")),
}
svc := payment.NewService(gateways, "stripe")
```

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Interface-based abstraction** | Business logic never depends on gateway-specific types |
| **Gateway name routing** | Callers can choose a specific gateway or use the default |
| **Normalized webhook events** | Webhook handlers are gateway-agnostic |
| **Health check interface** | Enables gateway health monitoring without coupling |

## When to Use This Pattern

- Supporting multiple payment providers
- Migrating between payment gateways (run both, route gradually)
- Geographic-specific providers (e.g., bKash in Bangladesh, Alipay in China)
- A/B testing different providers for cost/performance comparison

## Trade-offs

- **Abstraction overhead**: Gateway-specific features (e.g., Stripe's installment plans) may not fit the unified interface. You'll need to extend the interface or handle special cases.
- **Testing complexity**: Each gateway needs integration tests with its sandbox. Mock the interface for unit tests.
- **Vendor lock-in escape**: The adapter makes it easy to switch, but not free — each gateway has different business rules for refunds, disputes, and compliance.
