import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  shadowColor?: 'black' | 'pink' | 'cyan' | 'yellow' | 'red'
  thick?: boolean
  hoverable?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      shadowColor = 'black',
      thick = false,
      hoverable = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const shadowMap = {
      black: 'shadow-brutal',
      pink: 'shadow-brutal-pink',
      cyan: 'shadow-brutal-cyan',
      yellow: 'shadow-brutal-yellow',
      red: 'shadow-brutal-red',
    }

    const borderClass = thick ? 'border-6' : 'border-4'
    const hoverClass = hoverable ? 'hover:shadow-brutal-lg transition-all' : ''

    return (
      <div
        ref={ref}
        className={`bg-white ${borderClass} border-black ${shadowMap[shadowColor]} ${hoverClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
