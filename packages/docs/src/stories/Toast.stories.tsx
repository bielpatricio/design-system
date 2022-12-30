import type { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@biel-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    ButtonTitle: 'Agendar',
    dateDescription: new Date(),
    open: false,
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    dateDescription: new Date('12 23 2021'),
    ButtonTitle: 'Agendar',
    open: false,
  },
}

export const Default: StoryObj<ToastProps> = {}
