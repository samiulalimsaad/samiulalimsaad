import { beforeEach, describe, expect, it } from 'vitest'

// Mock fetch globally
global.fetch = vi.fn()

describe('fetchMediumFeed', () => {
  const mockFetch = vi.mocked(global.fetch)

  beforeEach(() => {
    vi.clearAllMocks()
    // Clear module cache to reset cached values
    vi.resetModules()
  })

  it('should return cached feed if within one hour', async () => {
    // Import after reset to get fresh module state
    const { fetchMediumFeed: freshFetchMediumFeed } = await import('@/lib/medium')

    const mockFeed = {
      title: 'Test Feed',
      description: 'Test Description',
      link: 'https://test.com',
      items: []
    }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockFeed,
    } as Response)

    // First call - should fetch
    const result1 = await freshFetchMediumFeed()
    expect(result1).toEqual(mockFeed)
    expect(mockFetch).toHaveBeenCalledTimes(1)

    // Second call - should use cache
    const result2 = await freshFetchMediumFeed()
    expect(result2).toEqual(mockFeed)
    expect(mockFetch).toHaveBeenCalledTimes(1) // Still only called once
  })

  it('should refetch after cache expires', async () => {
    // Import after reset to get fresh module state
    const { fetchMediumFeed: freshFetchMediumFeed } = await import('@/lib/medium')

    const mockFeed1 = {
      title: 'Test Feed 1',
      description: 'Test Description 1',
      link: 'https://test1.com',
      items: []
    }

    const mockFeed2 = {
      title: 'Test Feed 2',
      description: 'Test Description 2',
      link: 'https://test2.com',
      items: []
    }

    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockFeed1,
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockFeed2,
      } as Response)

    // First call
    const result1 = await freshFetchMediumFeed()
    expect(result1).toEqual(mockFeed1)

    // Mock time to be more than one hour later
    const originalDateNow = Date.now
    const mockNow = originalDateNow() + (60 * 60 * 1000) + 1 // 1 hour + 1ms
    vi.spyOn(Date, 'now').mockReturnValue(mockNow)

    // Second call - should fetch again
    const result2 = await freshFetchMediumFeed()
    expect(result2).toEqual(mockFeed2)
    expect(mockFetch).toHaveBeenCalledTimes(2)

    // Restore original Date.now
    vi.restoreAllMocks()
  })

  it('should return null when fetch fails with non-ok response', async () => {
    const { fetchMediumFeed: freshFetchMediumFeed } = await import('@/lib/medium')

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    } as Response)

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = await freshFetchMediumFeed()

    expect(result).toBeNull()
    expect(consoleSpy).toHaveBeenCalledWith(
      'Error fetching Medium RSS feed',
      404,
      'Not Found'
    )

    consoleSpy.mockRestore()
  })

  it('should return null when fetch throws an error', async () => {
    const { fetchMediumFeed: freshFetchMediumFeed } = await import('@/lib/medium')

    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = await freshFetchMediumFeed()

    expect(result).toBeNull()
    expect(consoleSpy).toHaveBeenCalledWith('Error fetching Medium RSS feed', new Error('Network error'))

    consoleSpy.mockRestore()
  })

  it('should make request to correct RSS2JSON API URL', async () => {
    const { fetchMediumFeed: freshFetchMediumFeed } = await import('@/lib/medium')

    const mockFeed = {
      title: 'Test Feed',
      description: 'Test Description',
      link: 'https://test.com',
      items: []
    }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockFeed,
    } as Response)

    await freshFetchMediumFeed()

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samiulalimsaad'
    )
  })

  it('should handle successful response with proper MediumFeed structure', async () => {
    const { fetchMediumFeed: freshFetchMediumFeed } = await import('@/lib/medium')

    const mockFeed = {
      title: 'Samiul Alim Saad',
      description: 'Developer blog',
      link: 'https://medium.com/@samiulalimsaad',
      image: 'https://example.com/image.jpg',
      category: ['technology', 'programming'],
      items: [
        {
          id: 'post-1',
          title: 'My First Post',
          link: 'https://medium.com/@samiulalimsaad/my-first-post',
          author: 'Samiul Alim Saad',
          published: '2023-01-01T00:00:00Z',
          created: '2023-01-01T00:00:00Z',
          category: ['javascript', 'react'],
          content: '<p>This is my first post content</p>'
        }
      ]
    }

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockFeed,
    } as Response)

    const result = await freshFetchMediumFeed()

    expect(result).toEqual(mockFeed)
    expect(result?.title).toBe('Samiul Alim Saad')
    expect(result?.items).toHaveLength(1)
    expect(result?.items[0].title).toBe('My First Post')
  })
})