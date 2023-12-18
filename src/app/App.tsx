import { useRef } from 'react'

import { IconButton } from '@/components/ui/Buttons/IconButton'
import { IcSearch } from '@/components/ui/IconsComponents/IcSearch/IcSearch'
import { TextField } from '@/components/ui/TextField/TextField'
import { Router } from '@/router'

export function App() {
  const ref = useRef<HTMLInputElement>(null)
  const onClick = () => {
    console.log('click')
  }

  return (
    <>
      <div>Hello world!</div>
      <TextField
        disabled
        label={'input'}
        onChange={event => {
          console.log(event.currentTarget.value)
        }}
        onClickSearch={onClick}
        placeholder={'Введите текст'}
        ref={ref}
        type={'search'}
      />
      return <Router />
    </>
  )
}
