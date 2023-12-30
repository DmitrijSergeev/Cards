import type { Meta, StoryObj } from '@storybook/react'

import { FC } from 'react'

import { Select } from '@/components/ui/Select'
import { SelectItem } from '@/components/ui/Select/SelectItem'

import cn from './selectStories.module.scss'

const arrSelect = [
  { title: 'one', value: '1' },
  { title: 'two', value: '2' },
  { title: 'three', value: '3' },
  { title: 'four', value: '4' },
]

const meta = {
  argTypes: {},
  component: Select,
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
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectDefault: Story = {
  args: {
    children: (
      <div>
        {arrSelect.map(el => {
          return (
            <SelectItem key={el.value} value={el.value}>
              {el.title}
            </SelectItem>
          )
        })}
      </div>
    ),
  },
}

export const Selects: FC = () => (
  <div>
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Stand Selects:</h1>
      <h3 style={{ display: 'flex', justifyContent: 'center' }}></h3>
      <div className={cn.separator}></div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <h4 style={{ marginRight: '10px' }}>Kinds:</h4>
        <p>variants</p>
      </div>
    </div>
    <div className={cn.grid}>
      <div>
        <h4 className={cn.kindTextField}>Default</h4>
        <Select>
          {arrSelect.map(el => {
            return (
              <SelectItem key={el.value} value={el.value}>
                {el.title}
              </SelectItem>
            )
          })}
        </Select>
      </div>
    </div>
  </div>
)
