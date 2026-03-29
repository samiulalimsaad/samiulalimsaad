import ResumeButton from '@/components/ResumeButton'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('ResumeButton', () => {
  it('should render a link with resume text', () => {
    render(<ResumeButton />)

    const link = screen.getByRole('link', { name: /resume/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('Resume')
  })

  it('should link to the correct resume URL', () => {
    render(<ResumeButton />)

    const link = screen.getByRole('link', { name: /resume/i })
    const expectedUrl = 'https://drive.google.com/file/d/1ZtcoHzmc2DGqJOYZG3dMjHK970_POjsK/view?usp=sharing'

    expect(link).toHaveAttribute('href', expectedUrl)
  })

  it('should open in a new tab', () => {
    render(<ResumeButton />)

    const link = screen.getByRole('link', { name: /resume/i })
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('should have security attributes', () => {
    render(<ResumeButton />)

    const link = screen.getByRole('link', { name: /resume/i })
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('should have correct styling classes', () => {
    render(<ResumeButton />)

    const link = screen.getByRole('link', { name: /resume/i })
    expect(link).toHaveClass(
      'inline-flex',
      'items-center',
      'rounded-full',
      'border',
      'border-cyan-100',
      'bg-white/90',
      'px-5',
      'py-2',
      'text-sm',
      'font-semibold',
      'text-cyan-700',
      'transition',
      'hover:border-cyan-300',
      'hover:bg-cyan-50/80'
    )
  })

  it('should be accessible with proper role', () => {
    render(<ResumeButton />)

    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link.tagName).toBe('A')
  })
})