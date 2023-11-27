import { ComponentPropsWithoutRef, ElementRef, ReactElement, forwardRef } from 'react'

import { CheckIcon } from '@/components/ui/IconsComponents/checkboxIcons/CheckIcon'
import { Typography } from '@/components/ui/Typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'
type PositionType = 'default' | 'left'

export type CheckboxProps = {
  checked: boolean
  id?: string
  label?: string
  onCheckedChange: (checked: boolean) => void
  position?: PositionType
} & Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (
    {
      checked,
      className,
      disabled,
      id,
      label,
      name,
      onCheckedChange,
      position = 'default',
      ...restProps
    },
    ref
  ): ReactElement => {
    const classNames = {
      checkboxWrapper: clsx(s.checkboxWrapper, disabled && s.disabled, s[position]),
      indicator: s.indicator,
      label: clsx(s.label, disabled && s.disabled, className),
      root: clsx(s.root),
    }

    return (
      <Typography as={'label'} className={classNames.label} variant={'Body2'}>
        <div className={classNames.checkboxWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={classNames.root}
            disabled={disabled}
            id={id}
            name={name}
            onCheckedChange={onCheckedChange}
            ref={ref}
            required={restProps.required}
          >
            {checked && (
              <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                <CheckIcon size={1.8} />
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
        {label}
      </Typography>
    )
  }
)

/*return (
    <div className={classNames.container}>
      <Typography as={'label'} className={classNames.label} variant={'Body2'}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
              checked={checked}
              className={classNames.root}
              disabled={disabled}
              id={id}
              onCheckedChange={onChange}
              required={required}
          >
            {checked && (
                <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                  <CheckIcon />
                </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
        {label}
      </Typography>
    </div>
)
}*/
