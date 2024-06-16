import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
  },
}
export const InputLabel: Story = {
  args: {
    disabled: false,
    label: 'Input',
  },
}
export const TypeSearch: Story = {
  args: {
    label: 'Search',
    type: 'search',
  },
}
