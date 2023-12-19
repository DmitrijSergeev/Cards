import { FC } from 'react'

import { Card } from '@/components/ui/Card/Card'
import { Meta, StoryObj } from '@storybook/react'

import cn from './CardStories.module.scss'

const meta = {
  argTypes: {},
  component: Card,
  parameters: {
    backgrounds: {
      default: 'night',
      values: [
        { name: 'night', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardDark: Story = {
  args: {
    children: <div className={cn.cardDark}>This is a dark Card</div>,
    className: `cardStories`,
  },
}

export const CardFixedWithHeightWidth: Story = {
  args: {
    children: (
      <div className={cn.fixedCard}>
        <h4>Card with fixed width and height</h4>
      </div>
    ),
  },
}

export const CardResponsiveSize: FC = () => (
  <div className={cn.resize}>
    <Card className={cn.responsiveCard}>
      <h4>This is responsive card</h4>
      <p>Move your parent div!</p>
    </Card>
  </div>
)
