import FloatingSocialLinks from '@/components/FloatingSocialLinks'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

// Mock the SocialLinks component
vi.mock('@/components/sections/SocialLinks', () => {
  return {
    default: function MockSocialLinks({ size }: { size: number }) {
      return <div data-testid="social-links" data-size={size}>Social Links</div>
    }
  }
})

describe('FloatingSocialLinks', () => {
  it('should render the floating social links button', () => {
    render(<FloatingSocialLinks />)

    const toggleButton = screen.getByRole('button', { name: /toggle social links/i })
    expect(toggleButton).toBeInTheDocument()

    // Check for the Send icon (it's an SVG, so we check for the element)
    const sendIcon = toggleButton.querySelector('svg')
    expect(sendIcon).toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    render(<FloatingSocialLinks />)

    const toggleInput = screen.getByRole('checkbox', { name: /toggle social links/i })
    expect(toggleInput).toBeInTheDocument()
    expect(toggleInput).toHaveAttribute('aria-label', 'Toggle social links')

    const toggleButton = screen.getByRole('button', { name: /toggle social links/i })
    expect(toggleButton).toHaveAttribute('aria-label', 'Toggle social links')
  })

  it('should have correct CSS classes for styling', () => {
    render(<FloatingSocialLinks />)

    // Check container has fixed positioning
    const container = screen.getByRole('button').closest('div')
    expect(container).toHaveClass('fixed', 'bottom-4', 'right-4', 'z-40')

    // Check button has proper styling classes
    const button = screen.getByRole('button')
    expect(button).toHaveClass(
      'flex',
      'h-11',
      'w-11',
      'cursor-pointer',
      'rounded-full',
      'shadow-lg',
      'ring-1',
      'transition',
      'hover:brightness-110'
    )
  })

  it('should initially hide the social links panel', () => {
    render(<FloatingSocialLinks />)

    const socialLinksPanel = screen.queryByTestId('social-links')
    expect(socialLinksPanel).not.toBeInTheDocument()
  })

  it('should show social links panel when checkbox is checked', async () => {
    const user = userEvent.setup()
    render(<FloatingSocialLinks />)

    const toggleInput = screen.getByRole('checkbox', { name: /toggle social links/i })

    // Click to show panel
    await user.click(toggleInput)

    const socialLinksPanel = screen.getByTestId('social-links')
    expect(socialLinksPanel).toBeInTheDocument()
    expect(socialLinksPanel).toHaveAttribute('data-size', '22')
  })

  it('should hide social links panel when checkbox is unchecked', async () => {
    const user = userEvent.setup()
    render(<FloatingSocialLinks />)

    const toggleInput = screen.getByRole('checkbox', { name: /toggle social links/i })

    // Click to show panel
    await user.click(toggleInput)
    expect(screen.getByTestId('social-links')).toBeInTheDocument()

    // Click again to hide panel
    await user.click(toggleInput)
    expect(screen.queryByTestId('social-links')).not.toBeInTheDocument()
  })

  it('should toggle panel when button is clicked', async () => {
    const user = userEvent.setup()
    render(<FloatingSocialLinks />)

    const toggleButton = screen.getByRole('button', { name: /toggle social links/i })

    // Click button to show panel
    await user.click(toggleButton)
    expect(screen.getByTestId('social-links')).toBeInTheDocument()

    // Click button again to hide panel
    await user.click(toggleButton)
    expect(screen.queryByTestId('social-links')).not.toBeInTheDocument()
  })

  it('should have proper panel styling when visible', async () => {
    const user = userEvent.setup()
    render(<FloatingSocialLinks />)

    const toggleInput = screen.getByRole('checkbox', { name: /toggle social links/i })
    await user.click(toggleInput)

    const panel = screen.getByTestId('social-links').parentElement
    expect(panel).toHaveClass(
      'absolute',
      'bottom-0',
      'right-12',
      'rounded-2xl',
      'bg-white/90',
      'shadow-xl',
      'ring-1',
      'backdrop-blur-sm'
    )
  })

  it('should display "Connect" text in the panel', async () => {
    const user = userEvent.setup()
    render(<FloatingSocialLinks />)

    const toggleInput = screen.getByRole('checkbox', { name: /toggle social links/i })
    await user.click(toggleInput)

    expect(screen.getByText('Connect')).toBeInTheDocument()
  })

  it('should have proper screen reader text', () => {
    render(<FloatingSocialLinks />)

    const srText = screen.getByText('Toggle social links')
    expect(srText).toHaveClass('sr-only')
  })

  it('should prevent event bubbling on the panel', async () => {
    const user = userEvent.setup()
    render(<FloatingSocialLinks />)

    const toggleInput = screen.getByRole('checkbox', { name: /toggle social links/i })
    await user.click(toggleInput)

    const panel = screen.getByTestId('social-links').parentElement?.parentElement
    expect(panel).toHaveClass('pointer-events-auto')
  })
})