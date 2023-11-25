import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
export function App() {
  const [checked, setCheked] = useState(false)

  const onchangeHandler = (checked: boolean) => {
    setCheked(checked)
  }

  return (
    <>
      <div>Hello world!</div>
      <Checkbox checked={checked} label={'Это наш лейбл'} onChange={onchangeHandler} />
    </>
  )
}
