import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'
import { Button } from '../Button'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})
const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})
const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})
export const ToastProvider = styled(Toast.Provider, {})
export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray600',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  padding: '$3 $5',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})
export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '$1',
})
export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  lineHeight: '$base',
})
export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  background: 'transparent',
  color: '$gray100',
  border: 'none',
  '&:hover': {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '$white',
  },
  '&:focus': {
    background: 'transparent',
    border: 'none',
    color: '$white',
  },
})

export const ToastRadixViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '25px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: '2147483647',
  outline: 'none',
})
