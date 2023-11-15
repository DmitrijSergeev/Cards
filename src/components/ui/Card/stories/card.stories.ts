import { Card } from '@/components/ui/Card/Card'
import { Meta, StoryObj } from '@storybook/react'

import './CardStories.scss'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardDark: Story = {
  args: {
    children: 'This is a dark Card',
    className: `cardStories`,
  },
}
