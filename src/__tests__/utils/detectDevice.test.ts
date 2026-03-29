import { detectDevice } from '@/components/utils/detectDevice'
import { describe, expect, it } from 'vitest'

describe('detectDevice', () => {
  it('should detect mobile device on Android', () => {
    const userAgent = 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 Mobile'
    const result = detectDevice(userAgent)

    expect(result.type).toBe('mobile')
    expect(result.os).toBe('Android')
  })

  it('should detect mobile device on iPhone', () => {
    const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
    const result = detectDevice(userAgent)

    expect(result.type).toBe('mobile')
    expect(result.os).toBe('iOS')
  })

  it('should detect tablet device on iPad', () => {
    const userAgent = 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
    const result = detectDevice(userAgent)

    expect(result.type).toBe('tablet')
    expect(result.os).toBe('iOS')
  })

  it('should detect desktop device on Windows', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    const result = detectDevice(userAgent)

    expect(result.type).toBe('desktop')
    expect(result.os).toBe('Windows')
  })

  it('should detect desktop device on macOS', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
    const result = detectDevice(userAgent)

    expect(result.type).toBe('desktop')
    expect(result.os).toBe('macOS')
  })

  it('should detect Chrome browser', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    const result = detectDevice(userAgent)

    expect(result.browser).toBe('Chrome')
  })

  it('should detect Firefox browser', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
    const result = detectDevice(userAgent)

    expect(result.browser).toBe('Firefox')
  })

  it('should detect Safari browser', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
    const result = detectDevice(userAgent)

    expect(result.browser).toBe('Safari')
  })

  it('should detect Edge browser', () => {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59'
    const result = detectDevice(userAgent)

    expect(result.browser).toBe('Edge')
  })

  it('should return null for unknown OS', () => {
    const userAgent = 'Unknown/1.0'
    const result = detectDevice(userAgent)

    expect(result.os).toBeNull()
  })

  it('should return null for unknown browser', () => {
    const userAgent = 'Unknown Browser/1.0'
    const result = detectDevice(userAgent)

    expect(result.browser).toBeNull()
  })

  it('should handle case insensitive matching', () => {
    const userAgent = 'mozilla/5.0 (ANDROID; mobile) CHROME/91.0'
    const result = detectDevice(userAgent)

    expect(result.type).toBe('mobile')
    expect(result.os).toBe('Android')
    expect(result.browser).toBe('Chrome')
  })

  it('should prioritize tablet over mobile detection', () => {
    const userAgent = 'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
    const result = detectDevice(userAgent)

    expect(result.type).toBe('tablet')
  })

  it('should default to desktop for unknown device types', () => {
    const userAgent = 'Some unknown user agent string'
    const result = detectDevice(userAgent)

    expect(result.type).toBe('desktop')
  })
})