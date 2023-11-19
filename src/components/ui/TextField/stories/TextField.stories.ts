import { TextField } from '@/components/ui/TextField/TextField'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: 'classname',
    id: 'id2',
  },
}
