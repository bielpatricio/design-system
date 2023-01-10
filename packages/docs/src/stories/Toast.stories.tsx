import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@biel-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    buttonTitle: 'Agendar',
    dateDescription: new Date(),
    buttonType: 'button',
    open: false,
  },
  argTypes: {
    buttonType: {
      options: ['button', 'reset', 'submit'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    dateDescription: new Date('12 23 2021'),
    buttonTitle: 'Agendar',
    buttonType: 'submit',
    open: false,
  },
}

export const Default: StoryObj<ToastProps> = {}
