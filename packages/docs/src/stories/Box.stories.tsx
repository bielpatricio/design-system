import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@biel-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando Box</Text>
      </>
    ),
    variant: 'primary',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
  },
}
