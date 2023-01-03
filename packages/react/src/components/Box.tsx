import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  maxWidth: '100%',

  variants: {
    variant: {
      primary: {
        background: '$gray800',
      },
      secondary: {
        background: '$gray600',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
