import { skillTiers, type SkillGroup, type SkillItem, type SkillTier } from '@/lib/skills'
import { describe, expect, it } from 'vitest'

describe('skills', () => {
  it('should export skillTiers as an array', () => {
    expect(Array.isArray(skillTiers)).toBe(true)
    expect(skillTiers.length).toBeGreaterThan(0)
  })

  it('should have valid skill tier structure', () => {
    skillTiers.forEach((tier: SkillTier) => {
      expect(tier).toHaveProperty('id')
      expect(tier).toHaveProperty('label')
      expect(tier).toHaveProperty('groups')
      expect(Array.isArray(tier.groups)).toBe(true)

      // Check id is one of the expected values
      expect(['advanced', 'proficient', 'familiar', 'other']).toContain(tier.id)

      // Check label is a non-empty string
      expect(typeof tier.label).toBe('string')
      expect(tier.label.length).toBeGreaterThan(0)

      // Check description if present
      if (tier.description) {
        expect(typeof tier.description).toBe('string')
      }
    })
  })

  it('should have valid skill group structure', () => {
    skillTiers.forEach((tier: SkillTier) => {
      tier.groups.forEach((group: SkillGroup) => {
        expect(group).toHaveProperty('title')
        expect(group).toHaveProperty('items')
        expect(Array.isArray(group.items)).toBe(true)

        // Check title is a non-empty string
        expect(typeof group.title).toBe('string')
        expect(group.title.length).toBeGreaterThan(0)

        // Check items are non-empty strings
        group.items.forEach((item: SkillItem) => {
          expect(typeof item).toBe('string')
          expect(item.length).toBeGreaterThan(0)
        })
      })
    })
  })

  it('should have unique skill tier IDs', () => {
    const ids = skillTiers.map((tier: SkillTier) => tier.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('should have expected skill tiers', () => {
    const expectedIds = ['advanced', 'proficient', 'familiar', 'other']
    const actualIds = skillTiers.map((tier: SkillTier) => tier.id)

    expectedIds.forEach(expectedId => {
      expect(actualIds).toContain(expectedId)
    })
  })

  it('should have advanced tier with expected structure', () => {
    const advancedTier = skillTiers.find((tier: SkillTier) => tier.id === 'advanced')
    expect(advancedTier).toBeDefined()
    expect(advancedTier?.groups.length).toBeGreaterThan(0)

    // Check that advanced tier has expected groups
    const expectedGroupTitles = [
      'Core Web & Frontend',
      'Backend & APIs',
      'Databases & Persistence',
      'DevOps & Cloud',
      'OS, Tooling & Productivity'
    ]

    const actualGroupTitles = advancedTier!.groups.map((group: SkillGroup) => group.title)

    expectedGroupTitles.forEach(expectedTitle => {
      expect(actualGroupTitles).toContain(expectedTitle)
    })
  })

  it('should have proficient tier with expected structure', () => {
    const proficientTier = skillTiers.find((tier: SkillTier) => tier.id === 'proficient')
    expect(proficientTier).toBeDefined()
    expect(proficientTier?.groups.length).toBeGreaterThan(0)

    // Check that proficient tier has expected groups
    const expectedGroupTitles = [
      'Languages & Backend Frameworks',
      'Containers, VPS & Infra',
      'Data & Machine Learning',
      'Frontend & UI'
    ]

    const actualGroupTitles = proficientTier!.groups.map((group: SkillGroup) => group.title)

    expectedGroupTitles.forEach(expectedTitle => {
      expect(actualGroupTitles).toContain(expectedTitle)
    })
  })

  it('should have all skill items as non-empty strings', () => {
    skillTiers.forEach((tier: SkillTier) => {
      tier.groups.forEach((group: SkillGroup) => {
        group.items.forEach((item: SkillItem) => {
          expect(typeof item).toBe('string')
          expect(item.trim().length).toBeGreaterThan(0)
          expect(item).toBe(item.trim()) // No leading/trailing whitespace
        })
      })
    })
  })

  it('should have reasonable number of skills per group', () => {
    skillTiers.forEach((tier: SkillTier) => {
      tier.groups.forEach((group: SkillGroup) => {
        expect(group.items.length).toBeGreaterThan(0)
        expect(group.items.length).toBeLessThan(50) // Reasonable upper limit
      })
    })
  })

  it('should have unique skills within each group', () => {
    skillTiers.forEach((tier: SkillTier) => {
      tier.groups.forEach((group: SkillGroup) => {
        const uniqueItems = new Set(group.items)
        expect(uniqueItems.size).toBe(group.items.length)
      })
    })
  })

  it('should have advanced tier as first tier', () => {
    expect(skillTiers[0].id).toBe('advanced')
  })

  it('should have labels starting with appropriate emojis', () => {
    skillTiers.forEach((tier: SkillTier) => {
      expect(tier.label).toMatch(/^🛠 |🧩 /)
    })
  })

  it('should have consistent tier ordering', () => {
    const expectedOrder = ['advanced', 'proficient', 'familiar', 'other']
    const actualOrder = skillTiers.map((tier: SkillTier) => tier.id)

    expect(actualOrder).toEqual(expectedOrder)
  })
})