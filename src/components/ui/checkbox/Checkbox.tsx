import { FC } from 'react'

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
    <form className={s.form}>
      <label className={s.label}>{label}</label>
      <div className={s.upBox}>
        <CheckboxRadix.Root
          className={checkboxClasses.join('')}
          disabled={disabled}
          onCheckedChange={onChange}
        >
          {checked && (
            <CheckboxRadix.Indicator className={s.indicator} forceMount>
              <CheckIcon className={checked ? s.checked : ''} />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
        <CheckboxRadix.Root
          className={checkboxClasses.join(' ')}
          disabled={disabled}
          onCheckedChange={onChange}
        >
          {checked && (
            <CheckboxRadix.Indicator
              asChild={false}
              className={checked ? s.indicator : s.checkbox}
              forceMount
            ></CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
      </div>
      <div className={s.bottomBox}>
        <CheckboxRadix.Root
          className={checkboxClasses.join(' ')}
          disabled={disabled}
          onCheckedChange={onChange}
        >
          {checked && (
            <CheckboxRadix.Indicator asChild={false} className={s.indicator} forceMount>
              <CheckIcon className={checked ? s.checked : ''} />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
        <span className={s.name}>{name}</span>
        <CheckboxRadix.Root
          className={checkboxClasses.join(' ')}
          disabled={disabled}
          onCheckedChange={onChange}
        >
          {checked && (
            <CheckboxRadix.Indicator
              asChild={false}
              className={checked ? s.indicator : s.checkbox}
              forceMount
            ></CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
        <span className={s.name}>{name}</span>
      </div>
    </form>
  )
}
