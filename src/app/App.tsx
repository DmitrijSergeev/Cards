import { useState } from 'react'

import { Select } from '@/components/ui/Select'
import { SelectItem } from '@/components/ui/Select/SelectItem'

import s from './App.module.scss'

export function App() {
  const items = [] as any[]

  for (let i = 1; i <= 70; i++) {
    const newItem = { title: `fruit${i}`, value: i }

    items.push(newItem)
  }
  const mapItem = items.map(el => ({ ...el, value: el.value.toString() }))

  console.log(mapItem)
  const [value, setValue] = useState('2')

  const onChangeCallback = (value: string) => {
    setValue(value)
  }

  return (
    <div style={{ display: 'flex', marginLeft: '300px', marginTop: '300px' }}>
      <Select
        classNameContent={s.items}
        classNameTrigger={s.itemsT}
        label={'label select'}
        onValueChange={value => {
          onChangeCallback(value)
        }}
        placeholder={'Select'}
        position={'popper'}
        value={value}
      >
        {mapItem.map(el => {
          return (
            <SelectItem key={el.value} value={el.value}>
              {el.title}
            </SelectItem>
          )
        })}
      </Select>
    </div>
  )
}
