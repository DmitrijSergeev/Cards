import { useRef } from 'react'

import { IcSearch } from '@/components/ui/IconsComponents/IcSearch/IconSearch'
import { TextField } from '@/components/ui/TextField/TextField'
import { Router } from '@/router'

export function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div>Hello world!</div>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          // height: '900px',
          justifyContent: 'center',
          width: '900px',
        }}
      >
        <TextField type={'password'} />
      </div>
      <button
        onClick={() => {
          console.log(inputRef)
        }}
      >
        BTN
      </button>
      return <Router />
    </>
  )
}
