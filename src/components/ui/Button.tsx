import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'black'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  isExternal?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      isExternal = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'brutal-border font-bold font-display transition-all active:shadow-none active:translate-x-2 active:translate-y-2 hover:shadow-none hover:translate-x-1 hover:translate-y-1'

    const variantStyles = {
      primary:
        'bg-primary-pink text-white shadow-brutal-pink hover:shadow-brutal',
      secondary: 'bg-white text-black shadow-brutal',
      black: 'bg-black text-white shadow-brutal',
    }

    const sizeStyles = {
      sm: 'px-6 py-3 text-base',
      md: 'px-8 py-4 text-lg',
      lg: 'px-10 py-5 text-xl',
    }

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

    if (href) {
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={`inline-block ${combinedClassName}`}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
