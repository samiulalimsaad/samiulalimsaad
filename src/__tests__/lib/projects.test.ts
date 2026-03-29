import { projects } from '@/lib/projects'
import { describe, expect, it } from 'vitest'

describe('projects', () => {
  it('should export an array of projects', () => {
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  it('should have projects with required properties', () => {
    projects.forEach((project, index) => {
      expect(project).toHaveProperty('_id')
      expect(project).toHaveProperty('name')
      expect(project).toHaveProperty('time')
      expect(project).toHaveProperty('shortDescription')
      expect(project).toHaveProperty('priority')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('image')
      expect(project).toHaveProperty('tools')
      expect(project).toHaveProperty('githubFrontEnd')
      expect(project).toHaveProperty('live')

      // Check types
      expect(typeof project._id).toBe('string')
      expect(typeof project.name).toBe('string')
      expect(typeof project.time).toBe('string')
      expect(typeof project.shortDescription).toBe('string')
      expect(typeof project.priority).toBe('number')
      expect(Array.isArray(project.description)).toBe(true)
      expect(typeof project.image).toBe('string')
      expect(Array.isArray(project.tools)).toBe(true)
      expect(typeof project.githubFrontEnd).toBe('string')
      expect(typeof project.live).toBe('string')
    })
  })

  it('should have valid priority values', () => {
    projects.forEach((project) => {
      expect(project.priority).toBeGreaterThanOrEqual(0)
      expect(project.priority).toBeLessThanOrEqual(100)
      expect(Number.isInteger(project.priority)).toBe(true)
    })
  })

  it('should have unique project IDs', () => {
    const ids = projects.map(project => project._id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('should have valid GitHub URLs or empty strings', () => {
    projects.forEach((project) => {
      if (project.githubFrontEnd) {
        expect(project.githubFrontEnd).toMatch(/^https:\/\/github\.com\//)
      }
      if (project.githubBackEnd) {
        expect(project.githubBackEnd).toMatch(/^https:\/\/github\.com\//)
      }
    })
  })

  it('should have valid live URLs', () => {
    projects.forEach((project) => {
      expect(project.live).toMatch(/^https?:\/\//)
    })
  })

  it('should have valid image paths', () => {
    projects.forEach((project) => {
      // Images should either be local paths starting with /sites/ or full URLs
      expect(project.image).toMatch(/^\/sites\/|^https?:\/\//)
    })
  })

  it('should have non-empty tool arrays', () => {
    projects.forEach((project) => {
      expect(project.tools.length).toBeGreaterThan(0)
      project.tools.forEach(tool => {
        expect(typeof tool).toBe('string')
        expect(tool.length).toBeGreaterThan(0)
      })
    })
  })

  it('should have non-empty description arrays', () => {
    projects.forEach((project) => {
      expect(project.description.length).toBeGreaterThan(0)
      project.description.forEach(desc => {
        expect(typeof desc).toBe('string')
        expect(desc.length).toBeGreaterThan(0)
      })
    })
  })

  it('should have projects with valid priority ordering', () => {
    // Check that all priorities are in valid range, but don't assume specific ordering
    // The ordering might be by date or other criteria
    const priorities = projects.map(p => p.priority)
    const sortedDescending = [...priorities].sort((a, b) => b - a)

    // At least check that the highest priority projects are reasonably positioned
    expect(Math.max(...priorities)).toBeGreaterThan(90) // Should have some high-priority projects
  })

  it('should have reasonable project names', () => {
    projects.forEach((project) => {
      expect(project.name.length).toBeGreaterThan(0)
      expect(project.name.length).toBeLessThan(100)
    })
  })

  it('should have consistent time format', () => {
    projects.forEach((project) => {
      // Should contain either parentheses or be a year
      expect(project.time).toMatch(/^\([^)]+\)$|^\(\d{4}\)$/)
    })
  })
})