import Check from '@/assets/icons/check'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import s from './checkbox.module.scss'
export type CheckboxProps = {
  checked: boolean
  onChange: () => void
}
export const Checkbox = (props: CheckboxProps) => {
  const {} = props
  const classNames = {
    root: clsx(s.root),
  }

  return (
    <div>
      <CheckboxRadix.Root className={classNames.root}>
        <CheckboxRadix.Indicator>
          <Check />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
    </div>
  )
}
