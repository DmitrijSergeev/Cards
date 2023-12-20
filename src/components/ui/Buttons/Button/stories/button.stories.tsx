import type { Meta, StoryObj } from '@storybook/react'

import { FC } from 'react'

import cn from './buttonStories.module.scss'

import { Button } from '../index'

const meta = {
  argTypes: {
    fullWidth: {
      control: { type: 'radio' },
      options: [false, true],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
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
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const AllButtons: FC = () => (
  <div>
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Stand Buttons:</h1>
      <h3 style={{ display: 'flex', justifyContent: 'center' }}>
        Variant: Default, Primary, Secondary, Tertiary, Link
      </h3>
      <div className={cn.separator}></div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <h4 style={{ marginRight: '10px' }}>Kinds:</h4>
        <p>variants</p>
      </div>
    </div>
    <div className={cn.grid}>
      <div>
        <h4 className={cn.kindTextField}>Default</h4>
        <Button>deafault</Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Primary</h4>
        <Button variant={'primary'}>Primary</Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Secondary</h4>
        <Button variant={'secondary'}>Secondary</Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Tertiary</h4>
        <Button variant={'tertiary'}>Tertiary</Button>
      </div>
      <div className={cn.link}>
        <h4 className={cn.kindTextField}>Button as a link</h4>
        <Button variant={'link'}>Button as a link</Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Default disabled</h4>
        <Button disabled>default</Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Primary disabled</h4>
        <Button disabled variant={'primary'}>
          Primary
        </Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Secondary disabled</h4>
        <Button disabled variant={'secondary'}>
          Secondary
        </Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Tertiary disabled</h4>
        <Button disabled variant={'tertiary'}>
          Tertiary
        </Button>
      </div>
      <div className={cn.link}>
        <h4 className={cn.kindTextField}>Button Link disabled</h4>
        <Button disabled variant={'link'}>
          link
        </Button>
      </div>
    </div>

    <div className={cn.fullWidth}>
      <div style={{ alignItems: 'flex-end', display: 'flex' }}>
        <h4 style={{ marginRight: '10px' }}>Kind:</h4>
        <p style={{ margin: '0px' }}>fullwidth</p>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Default</h4>
        <Button fullWidth>default</Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Primary</h4>
        <Button fullWidth variant={'primary'}>
          Primary
        </Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Secondary</h4>
        <Button fullWidth variant={'secondary'}>
          Secondary
        </Button>
      </div>
      <div>
        <h4 className={cn.kindTextField}>Tertiary</h4>
        <Button fullWidth variant={'tertiary'}>
          Tertiary
        </Button>
      </div>
    </div>
  </div>
)
