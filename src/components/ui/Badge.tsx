import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'pink' | 'cyan' | 'yellow' | 'black' | 'lime'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'black', className = '', ...props }, ref) => {
    const variantStyles = {
      pink: 'bg-primary-pink text-white border-primary-pink',
      cyan: 'bg-primary-cyan text-black border-primary-cyan',
      yellow: 'bg-primary-yellow text-black border-primary-yellow',
      black: 'bg-black text-white border-black',
      lime: 'bg-accent-lime text-black border-accent-lime',
    }

    return (
      <span
        ref={ref}
        className={`inline-block px-4 py-2 border-2 font-display font-bold text-sm uppercase tracking-wide ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
