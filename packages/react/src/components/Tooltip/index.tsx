import { ComponentProps, useEffect, useState } from 'react'
import { TooltipArrow, TooltipContainer, TooltipContent } from './styles'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { Text } from '../Text'
import { Box } from '../Box'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export interface TooltipProps extends ComponentProps<typeof TooltipRadix.Root> {
  available: boolean
  date: Date
}

export function Tooltip({ available, date, ...props }: TooltipProps) {
  const day = format(date, 'dd', { locale: ptBR })
  const newDate = format(date, "dd 'de' MMMM", { locale: ptBR })
  return (
    <TooltipRadix.Provider delayDuration={1000} skipDelayDuration={300}>
      <TooltipContainer {...props}>
        <TooltipRadix.Trigger asChild>
          <Box
            variant="secondary"
            css={{
              display: 'flex',
              flexDirection: 'row',
              padding: '$4 $6',
            }}
          >
            <Text size="sm" css={{ userSelect: 'none' }}>
              {day}
            </Text>
          </Box>
        </TooltipRadix.Trigger>

        <TooltipRadix.Portal>
          <TooltipContent sideOffset={-15} side="top">
            <Text size="sm">
              {available
                ? `${newDate} - Disponível`
                : `${newDate} - Indisponível`}
            </Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipContainer>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
