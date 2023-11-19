import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { Meta, StoryObj } from '@storybook/react'

import './Checkbox.stories.scss'

const meta = {
  argTypes: {
    variant: {
      options: ['default', 'active', 'focus', 'hover', 'disabled'],
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'сomponents/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Default',
    name: 'checkbox',
    variant: 'default',
  },
}

export const Active: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Active',
    name: 'checkbox',
    variant: 'active',
  },
}
export const Focus: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Focus',
    name: 'checkbox',
    variant: 'focus',
  },
}
export const Hover: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Hover',
    name: 'checkbox',
    variant: 'hover',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled',
    name: 'checkbox',
    variant: 'disabled',
  },
}
