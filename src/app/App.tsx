import { Button } from '@/components/ui/Buttons/Button'
import { Router } from '@/router'

export function App() {
  return (
    <>
      <Button asChild variant={'link'}>
        <a href={'https://google.com'}>Ссылка</a>
      </Button>
      <Button disabled variant={'link'}>
        Как ссылка
      </Button>

      <Router />
    </>
  )
}
