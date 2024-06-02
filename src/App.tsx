import LogOut from '@/assets/icons/logOut'
import Search from '@/assets/icons/search'
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
          <Button>
            Good Bye
            <Search />
          </Button>
        </div>
      </Typography>
    </div>
  )
}
