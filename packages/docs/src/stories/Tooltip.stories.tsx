import type { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@biel-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    available: true,
    date: new Date(),
  },
  argTypes: {
    available: {
      control: {
        type: 'boolean',
      },
    },
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
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    available: true,
    date: new Date(),
  },
}
