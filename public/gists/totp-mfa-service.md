# TOTP MFA Service Pattern (Go)

A time-based one-time password (TOTP) service for multi-factor authentication using the HOTP/TOTP standard (RFC 4226 / RFC 6238).

## Problem

Password-only authentication is vulnerable to credential theft, phishing, and credential stuffing. TOTP-based multi-factor authentication adds a second factor that an attacker cannot gain without access to the user's authenticator device.

## Solution

```go
package mfa

import (
    "crypto/rand"
    "crypto/sha256"
    "encoding/base32"
    "fmt"
    "time"

    "github.com/pquerna/otp/totp"
)

// Service manages TOTP-based multi-factor authentication.
type Service struct {
    store     SecretStore
    issuer   string // e.g., "MyApp"
}

// SecretStore abstracts the persistence layer for MFA secrets.
type SecretStore interface {
    SaveSecret(userID, secret string) error
    GetSecret(userID string) (string, error)
    DeleteSecret(userID string) error
}

// NewService creates a new MFA service.
func NewService(store SecretStore, issuer string) *Service {
    return &Service{
        store:   store,
        issuer: issuer,
    }
}

// GenerateSecret creates a new TOTP secret for a user.
// Returns the secret and a provisioning URI for QR code generation.
func (s *Service) GenerateSecret(userID, email string) (string, string, error) {
    // Generate 20 random bytes (160 bits) for the secret
    bytes := make([]byte, 20)
    if _, err := rand.Read(bytes); err != nil {
        return "", "", fmt.Errorf("failed to generate secret: %w", err)
    }

    secret := base32.StdEncoding.EncodeToString(bytes)

    // Create provisioning URI for authenticator app
    uri := totp.GenerateTOTPUri(secret, email, s.issuer, totp.GenerateOpts{
        Period:    30,
        Digits:    6,
        Algorithm: totp.AlgorithmSHA1,
    })

    return secret, uri, nil
}

// Enable persists the TOTP secret for the user.
func (s *Service) Enable(userID, secret string) error {
    return s.store.SaveSecret(userID, secret)
}

// Verify checks if the provided code is valid for the user's secret.
// Uses 30-second time step and allows 1 step before/after for clock skew.
func (s *Service) Verify(userID, code string) (bool, error) {
    secret, err := s.store.GetSecret(userID)
    if err != nil {
        return false, fmt.Errorf("failed to get secret: %w", err)
    }

    return totp.ValidateCustom(
        code,
        secret,
        time.Now().UTC(),
        totp.ValidateOpts{
            Period:    30,
            Skew:      1,      // Allow ±1 time step
            Digits:    6,
            Algorithm: totp.AlgorithmSHA1,
        },
    ), nil
}

// Disable removes the TOTP secret for the user.
func (s *Service) Disable(userID string) error {
    return s.store.DeleteSecret(userID)
}

// GenerateQRCode returns a PNG-encoded QR code for the provisioning URI.
// The user scans this with their authenticator app.
func (s *Service) GenerateQRCode(uri string) ([]byte, error) {
    // QR code generation would use a library like go-qrcode
    // This is typically called when the user first enables MFA
    // to display the QR code for their authenticator app
    return nil, fmt.Errorf("QR code library not included in this example")
}
```

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **20-byte secret** | 160 bits of entropy per RFC 4226 recommendation |
| **30-second time step** | Balance between security and usability |
| **1-step skew allowance** | Accommodates clock drift without reducing security |
| **SHA1 algorithm** | Required by TOTP RFC 6238 for compatibility with all authenticator apps |

## Enrollment Flow

```
User Request → Generate Secret → Display QR Code → User Scans with App
                                                      ↓
User Submits Code → Verify Against Secret → Enable MFA for User
```

## Verification Flow

```
User Logs in with Password (Step 1) → Code Matches ✓
       ↓
User Prompted for TOTP Code (Step 2)
       ↓
Verify Code Against Stored Secret
       ↓
Code Valid → Issue Session
Code Invalid → Reject with "Invalid Code"
```

## Security Considerations

1. **Secret storage**: TOTP secrets must be encrypted at rest. Consider using your platform's secret management or envelope encryption.
2. **Rate limiting**: The verify endpoint needs strict rate limiting to prevent brute force of 6-digit codes.
3. **Backup codes**: Provide one-time backup codes when enabling MFA, in case the user loses access to their authenticator app.
4. **Recovery flow**: Implement an account recovery process for users who lose both their password and MFA device.

## Trade-offs

- **TOTP over SMS**: TOTP is free, works offline, and isn't vulnerable to SIM swapping. However, it requires the user to install an authenticator app.
- **TOTP over push notifications**: Push notifications have better UX but require network connectivity and more complex infrastructure.
- **30s window**: Short enough to be secure, long enough for the user to read and type the code.
