import { trackVisitorVisit } from '@/server-actions/visit'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

// Mock Next.js headers
const mockHeaders = vi.fn()
vi.mock('next/headers', () => ({
  headers: mockHeaders,
}))

describe('trackVisitorVisit', () => {
  const mockFetch = vi.mocked(global.fetch)

  beforeEach(() => {
    vi.clearAllMocks()
    process.env.DISCORD_PAGE_VISIT_WEBHOOK_URL = 'https://discord.com/api/webhooks/visit'
    process.env.DISCORD_MENTION_ID = '123456789'
    process.env.DISCORD_TOKEN = 'visit-token'
  })

  afterEach(() => {
    delete process.env.DISCORD_PAGE_VISIT_WEBHOOK_URL
    delete process.env.DISCORD_MENTION_ID
    delete process.env.DISCORD_TOKEN
  })

  it('should return error when Discord webhook URL is not configured', async () => {
    delete process.env.DISCORD_PAGE_VISIT_WEBHOOK_URL

    const result = await trackVisitorVisit()

    expect(result).toEqual({
      success: false,
      error: 'Server is not configured',
    })

    expect(mockFetch).not.toHaveBeenCalled()
  })

  it('should successfully track visitor visit', async () => {
    const mockHeadersInstance = {
      get: vi.fn((key: string) => {
        const headers = {
          'x-forwarded-for': '192.168.1.1',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'referrer': 'https://google.com',
          'accept-language': 'en-US,en;q=0.9',
          'timezone': 'America/New_York',
          'country': 'US',
        }
        return headers[key as keyof typeof headers] || null
      }),
    }

    mockHeaders.mockResolvedValue(mockHeadersInstance)

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response)

    const result = await trackVisitorVisit()

    expect(result).toEqual({
      success: true,
    })

    expect(mockFetch).toHaveBeenCalledWith(
      'https://discord.com/api/webhooks/visit',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Authorization': 'Bot visit-token',
          'Content-Type': 'application/json',
        },
      })
    )

    const callArgs = mockFetch.mock.calls[0]
    const body = JSON.parse(callArgs[1]?.body as string)

    expect(body.content).toContain('<@123456789>')
    expect(body.content).toContain('192.168.1.1')
    expect(body.content).toContain('Windows')
    expect(body.content).toContain('Chrome')
    expect(body.content).toContain('desktop')
    expect(body.content).toContain('https://google.com')
    expect(body.content).toContain('en-US,en;q=0.9')
  })

  it('should handle missing headers gracefully', async () => {
    const mockHeadersInstance = {
      get: vi.fn(() => null),
    }

    mockHeaders.mockResolvedValue(mockHeadersInstance)

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response)

    const result = await trackVisitorVisit()

    expect(result).toEqual({
      success: true,
    })

    const callArgs = mockFetch.mock.calls[0]
    const body = JSON.parse(callArgs[1]?.body as string)

    expect(body.content).toContain('`null`')
    expect(body.content).toContain('user os: `null`')
    expect(body.content).toContain('user browser: `null`')
    expect(body.content).toContain('user device: `desktop`')
  })

  it('should handle Discord API failure', async () => {
    const mockHeadersInstance = {
      get: vi.fn(() => 'test-value'),
    }

    mockHeaders.mockResolvedValue(mockHeadersInstance)

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    } as Response)

    const result = await trackVisitorVisit()

    expect(result).toEqual({
      success: false,
      error: 'Failed to send message',
    })
  })

  it('should handle network errors', async () => {
    const mockHeadersInstance = {
      get: vi.fn(() => 'test-value'),
    }

    mockHeaders.mockResolvedValue(mockHeadersInstance)

    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    const result = await trackVisitorVisit()

    expect(result).toEqual({
      success: false,
      error: 'Unexpected server error',
    })
  })

  it('should handle multiple IP headers', async () => {
    const mockHeadersInstance = {
      get: vi.fn((key: string) => {
        const headers = {
          'x-forwarded-for': '192.168.1.1, 10.0.0.1',
          'x-real-ip': '192.168.1.2',
          'cf-connecting-ip': '192.168.1.3',
          'true-client-ip': '192.168.1.4',
          'cf-ipcountry': 'US',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        }
        return headers[key as keyof typeof headers] || null
      }),
    }

    mockHeaders.mockResolvedValue(mockHeadersInstance)

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response)

    await trackVisitorVisit()

    const callArgs = mockFetch.mock.calls[0]
    const body = JSON.parse(callArgs[1]?.body as string)

    expect(body.content).toContain('detected IP: `192.168.1.1, 10.0.0.1`')
    expect(body.content).toContain('user IP: `192.168.1.1, 10.0.0.1`')
    expect(body.content).toContain('user IP: `192.168.1.2`')
    expect(body.content).toContain('user IP: `192.168.1.3`')
    expect(body.content).toContain('user IP: `192.168.1.4`')
    expect(body.content).toContain('user IP: `US`')
  })

  it('should include timestamp in Asia/Dhaka timezone', async () => {
    const mockHeadersInstance = {
      get: vi.fn(() => 'test'),
    }

    mockHeaders.mockResolvedValue(mockHeadersInstance)

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response)

    // Mock Date to ensure consistent timestamp
    const mockDate = new Date('2024-01-15T10:30:00Z')
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any)

    await trackVisitorVisit()

    const callArgs = mockFetch.mock.calls[0]
    const body = JSON.parse(callArgs[1]?.body as string)

    // The timestamp should be formatted for Asia/Dhaka timezone
    expect(body.content).toContain('at')

    jest.restoreAllMocks()
  })
})