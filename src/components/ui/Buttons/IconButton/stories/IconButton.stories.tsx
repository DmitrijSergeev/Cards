import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from '@/components/ui/Buttons/IconButton'
import { IcEye } from '@/components/ui/IconsComponents/IcEye/IcEye'

const meta = {
  argTypes: {
    backgroundEffect: {
      control: { type: 'radio' },
      options: [false, true],
    },
    disabled: {
      control: { type: 'radio' },
      options: [false, true],
    },
    variant: {
      control: { type: 'radio' },
      options: ['inputColor', 'secondary', 'primary'],
    },
  },
  component: IconButton,
  tags: ['autodocs'],
  title: 'Components/IconButton',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: <IcEye size={1.5} />,
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: <IcEye size={1.5} />,
    disabled: false,
    variant: 'secondary',
  },
}

export const InputColors: Story = {
  args: {
    children: <IcEye size={1.5} />,
    disabled: false,
    variant: 'inputColor',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: <IcEye size={1.5} />,
    href: 'https://www.google.com/',
    variant: 'primary',
  },
}
