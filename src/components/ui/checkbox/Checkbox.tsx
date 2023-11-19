import { FC } from 'react'

import { CheckboxTrue } from '@/components/ui/IconsComponents/checkboxIcons/CheckboxTrue'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
  name?: string
  onChange?: () => void
  variant?: 'active' | 'default' | 'disabled' | 'focus' | 'hover'
}
export const Checkbox: FC<CheckboxProps> = props => {
  const { checked, disabled, label, name, onChange, variant = 'default' } = props

  const checkboxClasses = [s[variant]]

  /*if (box) {
    checkboxClasses.push(`${s.withIcon}`)
  }*/

  return (
    <div className={s.form}>
      <label className={s.label}>{label}</label>
      <CheckboxRadix.Root
        checked={checked}
        className={checkboxClasses.join('')}
        disabled={disabled}
        onCheckedChange={onChange}
      >
        <CheckboxRadix.Indicator className={s.indicator}>
          {/*<CheckboxTrue className={checked ? s.checked : ''} />*/}
          <CheckIcon />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
    </div>
  )
}
