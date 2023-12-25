import { useState } from 'react'

import { Select } from '@/components/ui/Select'

import s from './App.module.scss'

export function App() {
  const items = [] as any[]

  for (let i = 1; i <= 70; i++) {
    const newItem = { title: `fruit${i}`, value: i }

    items.push(newItem)
  }
  const mapItem = items.map(el => ({ ...el, value: el.value.toString() }))

  mapItem.push({ title: 'looooooooooooooooooooooooooooooooooooong', value: '1000' })

  const [value, setValue] = useState('2')

  const onChangeCallback = (value: string) => {
    setValue(value)
  }

  return (
    <div style={{ display: 'flex', marginLeft: '300px', marginTop: '300px' }}>
      <Select
        classNameContent={s.items}
        classNameTrigger={s.itemsT}
        items={mapItem}
        label={'label select'}
        onValueChange={onChangeCallback}
        placeholder={'Select'}
        position={'popper'}
        value={value}
      />
    </div>
  )
}
