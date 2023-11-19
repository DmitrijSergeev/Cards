import { FC } from 'react'

import { CheckboxTrue } from '@/components/ui/IconsComponents/checkboxIcons/CheckboxTrue'
import { Typography } from '@/components/ui/Typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: (checked: boolean) => void
}
export const Checkbox: FC<CheckboxProps> = props => {
  const { checked, disabled, label, onChange } = props

  const className = {
    label: s.labelDisabled,
    root: s.root,
    wrapper: s.wrapper,
  }

  return (
    <div className={className.root}>
      <div className={className.wrapper}>
        {label && (
          <Typography as={'label'} className={className.label}>
            {label}
          </Typography>
        )}
        <CheckboxRadix.Root checked={checked} disabled={disabled} onCheckedChange={onChange}>
          {checked && (
            <CheckboxRadix.Indicator className={s.indicator}>
              <CheckboxTrue />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
      </div>
    </div>
  )
}
