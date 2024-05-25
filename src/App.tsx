import LogOut from '@/assets/icons/logOut'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div>
      <Typography variant={'Caption'}>
        <div style={{ display: 'inline-flex', gap: '20px' }}>
          <Button>
            <LogOut />
            Hello
          </Button>
          <Button>Good Bye</Button>
        </div>
      </Typography>
    </div>
  )
}
