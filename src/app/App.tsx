import { Select } from '@/components/ui/Select'

export function App() {
  const item = ['apple', 'kiwi', 'var', 5]

  return (
    <div style={{ display: 'flex', marginLeft: '300px', marginTop: '300px' }}>
      <Select items={item} label={'label select'} placeholder={'Select'} />
    </div>
  )
}
