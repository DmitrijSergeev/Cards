import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckboxStory: Story = {}
