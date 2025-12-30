import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'lg', className = '', ...props }, ref) => {
    const sizeMap = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-6xl',
    }

    return (
      <div
        ref={ref}
        className={`mx-auto px-6 md:px-8 ${sizeMap[size]} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
