'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { VariantProps, cva } from 'class-variance-authority'

const cardVariants = cva(
  'rounded-2xl overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white border border-gray-200 shadow-light',
        glass: 'bg-white/80 backdrop-blur-sm border border-palette-amber/20',
        elevated: 'bg-white shadow-light-lg',
        filled: 'bg-gray-50',
        gradient: 'gradient-light-yellow',
      },
      hover: {
        default: 'hover:shadow-light-lg',
        glow: 'hover:shadow-lg hover:shadow-primary-500/10',
        scale: 'hover:scale-[1.02]',
        border: 'hover:border-primary-400',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      hover: 'default',
    },
  }
)

export interface CardProps 
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(cardVariants({ variant, hover, className }))}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge('flex flex-col p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={twMerge('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={twMerge('text-sm text-gray-500', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card }
export { CardHeader }
export { CardFooter }
export { CardTitle }
export { CardDescription }
export { CardContent } 