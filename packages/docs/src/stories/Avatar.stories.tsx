import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/bielpatricio.png',
    alt: 'Gabriel Patricio',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const withFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
