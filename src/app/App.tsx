import { useState } from 'react'

import { TextField } from '@/components/ui/TextField/TextField'

export function App() {
  const [text, setText] = useState('')

  const handleChangeText = (value: string) => {
    setText(value)
  }

  return (
    <>
      <div>Hello world!</div>
      <TextField
        id={'id1'}
        label={'input'}
        labelPosition={'start'}
        onChangeText={handleChangeText}
        placeholder={'Введите текст'}
        value={text}
      />
    </>
  )
}
