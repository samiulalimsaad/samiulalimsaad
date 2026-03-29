import { sendContact } from '@/server-actions/sendContact'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

// Mock fetch globally
global.fetch = vi.fn()

describe('sendContact', () => {
  const mockFetch = vi.mocked(global.fetch)

  beforeEach(() => {
    vi.clearAllMocks()
    // Set up environment variables
    process.env.DISCORD_CONTACT_WEBHOOK_URL = 'https://discord.com/api/webhooks/test'
    process.env.DISCORD_MENTION_ID = '123456789'
    process.env.DISCORD_TOKEN = 'test-token'
  })

  afterEach(() => {
    delete process.env.DISCORD_CONTACT_WEBHOOK_URL
    delete process.env.DISCORD_MENTION_ID
    delete process.env.DISCORD_TOKEN
  })

  it('should return error when required fields are missing', async () => {
    const formData = new FormData()
    formData.set('name', '')
    formData.set('email', 'test@example.com')
    formData.set('message', 'Hello')

    const result = await sendContact({ status: 'idle', message: null }, formData)

    expect(result).toEqual({
      status: 'error',
      message: 'Please fill out all fields.',
    })
  })

  it('should return error when name is missing', async () => {
    const formData = new FormData()
    formData.set('email', 'test@example.com')
    formData.set('message', 'Hello world')

    const result = await sendContact({ status: 'idle', message: null }, formData)

    expect(result).toEqual({
      status: 'error',
      message: 'Please fill out all fields.',
    })
  })

  it('should return error when email is missing', async () => {
    const formData = new FormData()
    formData.set('name', 'John Doe')
    formData.set('message', 'Hello world')

    const result = await sendContact({ status: 'idle', message: null }, formData)

    expect(result).toEqual({
      status: 'error',
      message: 'Please fill out all fields.',
    })
  })

  it('should return error when message is missing', async () => {
    const formData = new FormData()
    formData.set('name', 'John Doe')
    formData.set('email', 'test@example.com')

    const result = await sendContact({ status: 'idle', message: null }, formData)

    expect(result).toEqual({
      status: 'error',
      message: 'Please fill out all fields.',
    })
  })

  it('should return error when Discord webhook URL is not configured', async () => {
    delete process.env.DISCORD_CONTACT_WEBHOOK_URL

    const formData = new FormData()
    formData.set('name', 'John Doe')
    formData.set('email', 'test@example.com')
    formData.set('message', 'Hello world')

    const result = await sendContact({ status: 'idle', message: null }, formData)

    expect(result).toEqual({
      status: 'error',
      message: 'Server is not configured to send messages.',
    })
  })

  it('should successfully send message to Discord', async () => {
    const formData = new FormData()
    formData.set('name', 'John Doe')
    formData.set('email', 'test@example.com')
    formData.set('message', 'Hello world')

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response)

    const result = await sendContact({ status: 'idle', message: null }, formData)

    expect(result).toEqual({
      status: 'success',
      message: 'Your message has been sent successfully.',
    })

    expect(mockFetch).toHaveBeenCalledWith(
      'https://discord.com/api/webhooks/test',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bot test-token',
        },
      })
    )

    const callArgs = mockFetch.mock.calls[0]
    const body = JSON.parse(callArgs[1]?.body as string)

    expect(body.content).toContain('<@123456789>')
    expect(body.content).toContain('test@example.com')
    expect(body.content).toContain('John Doe')
    expect(body.content).toContain('Hello world')
  })

  it('should handle Discord API failure', async () => {
    const formData = new FormData()
    formData.set('name', 'John Doe')
    formData.set('email', 'test@example.com')
    formData.set('message', 'Hello world')

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    } as Response)

    const result = await sendContact({ status: 'idle', message: null }, formData)

    expect(result).toEqual({
      status: 'error',
      message: 'Failed to send your message. Please try again.',
    })
  })

  it('should handle network errors', async () => {
    const formData = new FormData()
    formData.set('name', 'John Doe')
    formData.set('email', 'test@example.com')
    formData.set('message', 'Hello world')

    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    const result = await sendContact({ status: 'idle', message: null }, formData)

    expect(result).toEqual({
      status: 'error',
      message: 'Something went wrong. Please try again.',
    })
  })

  it('should trim whitespace from form inputs', async () => {
    const formData = new FormData()
    formData.set('name', '  John Doe  ')
    formData.set('email', '  test@example.com  ')
    formData.set('message', '  Hello world  ')

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response)

    await sendContact({ status: 'idle', message: null }, formData)

    const callArgs = mockFetch.mock.calls[0]
    const body = JSON.parse(callArgs[1]?.body as string)

    expect(body.content).toContain('John Doe')
    expect(body.content).toContain('test@example.com')
    expect(body.content).toContain('Hello world')
  })

  it('should work without Discord token', async () => {
    delete process.env.DISCORD_TOKEN

    const formData = new FormData()
    formData.set('name', 'John Doe')
    formData.set('email', 'test@example.com')
    formData.set('message', 'Hello world')

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
    } as Response)

    const result = await sendContact({ status: 'idle', message: null }, formData)

    expect(result.status).toBe('success')

    expect(mockFetch).toHaveBeenCalledWith(
      'https://discord.com/api/webhooks/test',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // No Authorization header when token is not set
        },
      })
    )
  })
})