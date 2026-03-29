import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock environment variables for server actions
process.env.DISCORD_CONTACT_WEBHOOK_URL = 'https://discord.com/api/webhooks/test'
process.env.DISCORD_MENTION_ID = '123456789'
process.env.DISCORD_TOKEN = 'test-token'