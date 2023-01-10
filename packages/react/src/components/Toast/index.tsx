import { ComponentProps, useEffect, useState } from 'react'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastRadixViewport,
  ToastTitle,
} from './styles'
import * as ToastRadix from '@radix-ui/react-toast'
import { Text } from '../Text'
import { X } from 'phosphor-react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export interface ToastProps extends ComponentProps<typeof ToastRadix.Root> {
  title: string
  dateDescription: Date
  openToast: boolean
}

export function Toast({
  title,
  dateDescription,
  openToast = false,
  ...props
}: ToastProps) {
  const [open, setOpen] = useState(false)
  const description = format(
    dateDescription,
    "eeee',' dd 'de' MMMM 'às' HH'h'",
    { locale: ptBR },
  )

  useEffect(() => {
    setOpen(openToast)
  }, [openToast])

  return (
    <ToastRadix.Provider
      swipeDirection="right"
      duration={5000}
      label="Notification"
    >
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
          <X size={16} />
        </ToastAction>
      </ToastContainer>

      <ToastRadixViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
