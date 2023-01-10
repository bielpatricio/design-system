import { ComponentProps, useEffect, useRef, useState } from 'react'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'
import * as ToastRadix from '@radix-ui/react-toast'
import { Button } from '../Button'
import { Text } from '../Text'
import { X } from 'phosphor-react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export interface ToastProps extends ComponentProps<typeof ToastRadix.Root> {
  title: string
  buttonTitle: string
  dateDescription: Date
  buttonType: 'button' | 'reset' | 'submit'
}

export function Toast({
  title,
  buttonTitle,
  dateDescription,
  buttonType = 'button',
  ...props
}: ToastProps) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const description = format(
    dateDescription,
    "eeee',' dd 'de' MMMM 'às' HH'h'",
    { locale: ptBR },
  )

  return (
    <ToastRadix.Provider
      swipeDirection="right"
      duration={5000}
      label="Notification"
    >
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
        type={buttonType}
      >
        {buttonTitle}
      </Button>
      <ToastContainer {...props} open={open} onOpenChange={setOpen}>
        <ToastTitle>
          <Text as="strong" size="xl">
            {title}
          </Text>
        </ToastTitle>
        <ToastDescription asChild>
          <Text size="sm" css={{ color: '$gray200' }}>
            {description}
          </Text>
        </ToastDescription>
        <ToastAction asChild altText="Close">
          <Button variant="tertiary" size="md">
            <X size={16} />
          </Button>
        </ToastAction>
      </ToastContainer>

      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
