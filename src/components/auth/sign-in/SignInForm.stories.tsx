import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './SignInForm'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/sign-in',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: data => console.info(data),
  },
}
