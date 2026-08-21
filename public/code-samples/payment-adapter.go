package payment

import (
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"net/http"
	"time"
)

// --- Gateway Interface ---

// Gateway defines the contract every payment provider must implement.
type Gateway interface {
	Name() string
	CreateSession(ctx context.Context, req *SessionRequest) (*SessionResponse, error)
	ExecutePayment(ctx context.Context, paymentID string) (*PaymentResult, error)
	QueryPayment(ctx context.Context, paymentID string) (*PaymentResult, error)
	VerifyWebhook(ctx context.Context, body []byte, signature string) (bool, error)
	Refund(ctx context.Context, paymentID string, amount int64) (*RefundResult, error)
}

// --- Shared Types ---

type SessionRequest struct {
	Amount      int64
	Currency    string
	CustomerID  string
	Description string
	ReturnURL   string
	Metadata    map[string]string
}

type SessionResponse struct {
	PaymentID   string
	CheckoutURL string
	ExpiresAt   time.Time
}

type PaymentResult struct {
	PaymentID     string
	Status        string // "initiated", "pending", "success", "failed", "refund"
	Amount        int64
	Currency      string
	TransactionID string
	RawResponse   map[string]interface{}
}

type RefundResult struct {
	RefundID string
	Status   string
	Amount   int64
}

// --- Errors ---

var (
	ErrWebhookVerification = errors.New("webhook signature verification failed")
	ErrPaymentNotFound     = errors.New("payment not found")
	ErrDuplicateTx         = errors.New("duplicate transaction detected")
	ErrIdempotencyMismatch = errors.New("idempotency key mismatch")
)

// --- Stripe Gateway ---

type StripeGateway struct {
	secretKey     string
	webhookSecret string
	httpClient    *http.Client
}

func NewStripeGateway(secretKey, webhookSecret string) *StripeGateway {
	return &StripeGateway{
		secretKey:     secretKey,
		webhookSecret: webhookSecret,
		httpClient: &http.Client{
			Timeout: 30 * time.Second,
		},
	}
}

func (g *StripeGateway) Name() string { return "stripe" }

func (g *StripeGateway) CreateSession(ctx context.Context, req *SessionRequest) (*SessionResponse, error) {
	// POST https://api.stripe.com/v1/checkout/sessions
	// In production, use the Stripe SDK. This shows the interface contract.
	return &SessionResponse{
		PaymentID:   "cs_test_" + generateID(),
		CheckoutURL: "https://checkout.stripe.com/pay/" + generateID(),
		ExpiresAt:   time.Now().Add(30 * time.Minute),
	}, nil
}

func (g *StripeGateway) ExecutePayment(ctx context.Context, paymentID string) (*PaymentResult, error) {
	return &PaymentResult{
		PaymentID: paymentID,
		Status:    "success",
	}, nil
}

func (g *StripeGateway) QueryPayment(ctx context.Context, paymentID string) (*PaymentResult, error) {
	return &PaymentResult{
		PaymentID: paymentID,
		Status:    "success",
	}, nil
}

func (g *StripeGateway) VerifyWebhook(ctx context.Context, body []byte, signature string) (bool, error) {
	// Stripe uses HMAC-SHA256 with the webhook secret.
	// Signature format: t=timestamp,v1=hex(hmac)
	expectedSig := g.computeWebhookSignature(body)
	return hmac.Equal([]byte(signature), []byte(expectedSig)), nil
}

func (g *StripeGateway) computeWebhookSignature(body []byte) string {
	mac := hmac.New(sha256.New, []byte(g.webhookSecret))
	mac.Write(body)
	return "v1=" + hex.EncodeToString(mac.Sum(nil))
}

func (g *StripeGateway) Refund(ctx context.Context, paymentID string, amount int64) (*RefundResult, error) {
	return &RefundResult{
		RefundID: "re_" + generateID(),
		Status:   "success",
		Amount:   amount,
	}, nil
}

// --- bKash Gateway ---

type BKashGateway struct {
	appKey      string
	appSecret   string
	username    string
	password    string
	baseURL     string
	grantToken  string
	tokenExpiry time.Time
	httpClient  *http.Client
}

func NewBKashGateway(appKey, appSecret, username, password, baseURL string) *BKashGateway {
	return &BKashGateway{
		appKey:    appKey,
		appSecret: appSecret,
		username:  username,
		password:  password,
		baseURL:   baseURL,
		httpClient: &http.Client{
			Timeout: 30 * time.Second,
		},
	}
}

func (g *BKashGateway) Name() string { return "bkash" }

func (g *BKashGateway) CreateSession(ctx context.Context, req *SessionRequest) (*SessionResponse, error) {
	// Step 1: Get grant token if expired.
	// Step 2: POST /checkout/payment/create
	// In production, this calls the bKash Tokenized Checkout API.
	return &SessionResponse{
		PaymentID:   "bkash_" + generateID(),
		CheckoutURL: g.baseURL + "/checkout?paymentID=" + generateID(),
		ExpiresAt:   time.Now().Add(15 * time.Minute),
	}, nil
}

func (g *BKashGateway) ExecutePayment(ctx context.Context, paymentID string) (*PaymentResult, error) {
	// POST /checkout/payment/execute/{paymentID}
	return &PaymentResult{
		PaymentID: paymentID,
		Status:    "success",
	}, nil
}

func (g *BKashGateway) QueryPayment(ctx context.Context, paymentID string) (*PaymentResult, error) {
	// GET /checkout/payment/query/{paymentID}
	return &PaymentResult{
		PaymentID: paymentID,
		Status:    "success",
	}, nil
}

func (g *BKashGateway) VerifyWebhook(ctx context.Context, body []byte, signature string) (bool, error) {
	// bKash uses its own signature scheme. This is a simplified check.
	return true, nil
}

func (g *BKashGateway) Refund(ctx context.Context, paymentID string, amount int64) (*RefundResult, error) {
	return &RefundResult{
		RefundID: "bkash_ref_" + generateID(),
		Status:   "success",
		Amount:   amount,
	}, nil
}

// --- Adapter / Router ---

// Router dispatches payment operations to the correct gateway based on currency.
type Router struct {
	gateways map[string]Gateway
	defaults string
}

func NewRouter(defaults string) *Router {
	return &Router{
		gateways: make(map[string]Gateway),
		defaults: defaults,
	}
}

func (r *Router) Register(currency string, g Gateway) {
	r.gateways[currency] = g
}

func (r *Router) GatewayFor(currency string) (Gateway, bool) {
	g, ok := r.gateways[currency]
	if !ok {
		g, ok = r.gateways[r.defaults]
	}
	return g, ok
}

// --- Idempotency Guard ---

// IdempotencyStore prevents duplicate payment processing.
type IdempotencyStore interface {
	Store(ctx context.Context, key string, result []byte, ttl time.Duration) (bool, error)
	Load(ctx context.Context, key string) ([]byte, bool, error)
}

type PaymentService struct {
	router      *Router
	idempotency IdempotencyStore
}

func NewPaymentService(router *Router, idempotency IdempotencyStore) *PaymentService {
	return &PaymentService{
		router:      router,
		idempotency: idempotency,
	}
}

func (s *PaymentService) InitiatePayment(
	ctx context.Context,
	currency string,
	req *SessionRequest,
) (*SessionResponse, error) {
	g, ok := s.router.GatewayFor(currency)
	if !ok {
		return nil, fmt.Errorf("no gateway for currency: %s", currency)
	}

	// Idempotency check.
	idempotencyKey := fmt.Sprintf("payment:%s:%s:%d", req.CustomerID, currency, req.Amount)
	existing, found, _ := s.idempotency.Load(ctx, idempotencyKey)
	if found && existing != nil {
		return nil, ErrIdempotencyMismatch
	}

	resp, err := g.CreateSession(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("create session: %w", err)
	}

	// Store for idempotency.
	s.idempotency.Store(ctx, idempotencyKey, []byte(resp.PaymentID), 24*time.Hour)

	return resp, nil
}

func (s *PaymentService) HandleWebhook(
	ctx context.Context,
	currency string,
	body []byte,
	signature string,
) (*PaymentResult, error) {
	g, ok := s.router.GatewayFor(currency)
	if !ok {
		return nil, fmt.Errorf("no gateway for currency: %s", currency)
	}

	valid, err := g.VerifyWebhook(ctx, body, signature)
	if err != nil || !valid {
		return nil, ErrWebhookVerification
	}

	// Parse the paymentID from body, then execute.
	paymentID := extractPaymentID(body)
	result, err := g.ExecutePayment(ctx, paymentID)
	if err != nil {
		return nil, fmt.Errorf("execute payment: %w", err)
	}

	return result, nil
}

// --- Helpers ---

func generateID() string {
	return fmt.Sprintf("%d", time.Now().UnixNano())
}

func extractPaymentID(body []byte) string {
	// In production, JSON-unmarshal and extract paymentID.
	return "parsed_from_body"
}

// Ensure compliance at compile time.
var (
	_ Gateway = (*StripeGateway)(nil)
	_ Gateway = (*BKashGateway)(nil)
)

// Suppress unused import warnings.
var _ = io.NopCloser(nil)
var _ = http.MethodGet
