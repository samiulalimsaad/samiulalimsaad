import { cn, getExperienceYears } from '@/lib/utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

describe('cn', () => {
  it('should merge Tailwind classes correctly', () => {
    const result = cn('bg-red-500', 'bg-blue-500')
    expect(result).toBe('bg-blue-500')
  })

  it('should handle conditional classes', () => {
    const result = cn('bg-red-500', true && 'text-white', false && 'text-black')
    expect(result).toBe('bg-red-500 text-white')
  })

  it('should handle arrays of classes', () => {
    const result = cn(['bg-red-500', 'text-white'], 'font-bold')
    expect(result).toBe('bg-red-500 text-white font-bold')
  })

  it('should handle undefined and null values', () => {
    const result = cn('bg-red-500', undefined, null, 'text-white')
    expect(result).toBe('bg-red-500 text-white')
  })

  it('should handle empty strings', () => {
    const result = cn('bg-red-500', '', 'text-white')
    expect(result).toBe('bg-red-500 text-white')
  })

  it('should handle complex Tailwind conflicts', () => {
    const result = cn('px-2 py-1', 'px-4', 'py-2')
    expect(result).toBe('px-4 py-2')
  })
})

describe('getExperienceYears', () => {
  const mockNow = new Date('2024-01-01T00:00:00Z')

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(mockNow)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should calculate experience years from default start date', () => {
    const experienceStart = new Date('2021-07-01T00:00:00Z')
    const result = getExperienceYears()

    // From July 2021 to Jan 2024 is about 2 years and 6 months, should floor to 2
    const expectedYears = Math.floor((mockNow.getTime() - experienceStart.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
    expect(result).toBe(Math.max(1, expectedYears))
  })

  it('should calculate experience years from custom start date', () => {
    const customStart = new Date('2022-01-01T00:00:00Z')
    const result = getExperienceYears(customStart)

    const diffMs = mockNow.getTime() - customStart.getTime()
    const years = diffMs / (1000 * 60 * 60 * 24 * 365.25)
    const expectedYears = Math.max(1, Math.floor(years))

    expect(result).toBe(expectedYears)
  })

  it('should return at least 1 year even for very short periods', () => {
    const recentStart = new Date('2023-12-31T00:00:00Z')
    const result = getExperienceYears(recentStart)

    expect(result).toBe(1)
  })

  it('should calculate fractional years correctly', () => {
    const startDate = new Date('2023-01-01T00:00:00Z')
    const result = getExperienceYears(startDate)

    // From Jan 2023 to Jan 2024 is exactly 1 year
    expect(result).toBe(1)
  })

  it('should handle leap years correctly', () => {
    const startDate = new Date('2020-02-29T00:00:00Z') // Leap year date
    const mockLeapYear = new Date('2024-02-29T00:00:00Z') // Another leap year

    vi.setSystemTime(mockLeapYear)
    const result = getExperienceYears(startDate)

    // Should be 4 years (2020-2024)
    expect(result).toBe(4)
  })
})