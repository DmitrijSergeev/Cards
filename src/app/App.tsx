import { useState } from 'react'

import { Typography } from '@/components/ui/Typography'
import { Checkbox } from '@/components/ui/checkbox'

import s from './App.module.scss'
export function App() {
  const [checked, setCheked] = useState(false)

  const onchangeHandler = (checked: boolean) => {
    setCheked(checked)
  }

  return (
    <>
      <div>Hello world!</div>
      <Checkbox checked={checked} label={'Это наш лейбл'} onChange={onchangeHandler} />
      <Typography as={'label'} className={s.labelName}>
        Это типография
      </Typography>
    </>
  )
}
