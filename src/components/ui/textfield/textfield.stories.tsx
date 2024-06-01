import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {
    label: {
      control: 'text',
      description: 'Text above tex field',
    },
    value: {
      control: 'text',
      description: 'Current value for text field',
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TypeSearch: Story = {
  args: {
    label: 'Search',
    type: 'search',
    value: 'Search',
  },
}
