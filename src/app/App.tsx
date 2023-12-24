import { useState } from 'react'

import { Select } from '@/components/ui/Select'

const item = [{ title: 'apple', value: 1 }]

for (let i = 0; i < 100; i++) {
  const randomTitle = generateRandomTitle()
  const randomValue = generateRandomValue()

  item.push({ title: randomTitle, value: randomValue })
}

function generateRandomTitle() {
  const length = Math.floor(Math.random() * 20) + 1
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  let randomTitle = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)

    randomTitle += characters.charAt(randomIndex)
  }

  return randomTitle
}

function generateRandomValue() {
  return Math.floor(Math.random() * 100) + 1
}

export function App() {
  const mapItem = item.map(el => ({ ...el, value: el.value.toString() }))

  const [value, setValue] = useState('')
  const onChangeCallback = (value: string) => {
    setValue(value)
  }

  return (
    <div style={{ display: 'flex', marginLeft: '300px', marginTop: '300px' }}>
      <Select
        items={mapItem}
        label={'label select'}
        onValueChange={onChangeCallback}
        placeholder={'Select'}
        value={value}
      />
    </div>
  )
}
