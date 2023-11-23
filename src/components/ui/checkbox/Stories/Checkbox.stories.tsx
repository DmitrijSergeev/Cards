import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { Meta, StoryObj } from '@storybook/react'

import './Checkbox.stories.scss'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const ControledChecbox = {
  args: {
    label: 'Click here',
  },
}

export const Default: Story = {
  args: {
    checked: true,
    disabled: false,
  },
}

export const DefaultWithLabel: Story = {
  args: {
    disabled: false,
    label: 'Default',
  },
}

export const Active: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Active',
  },
}
export const Focus: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Focus',
  },
}
export const Hover: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Hover',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled',
  },
}
