import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@biel-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quod quaerat hic pariatur tempora, repellat cum porro incidunt ratione natus laboriosam, eligendi temporibus sequi quas iure accusantium! Accusamus, alias adipisci.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'strong Text',
    as: 'strong',
  },
}
