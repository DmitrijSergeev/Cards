import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './textField.module.scss'
export type TextFieldProps = {
  label?: string
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ className, label, ...rest }, ref) => {
    const classNames = {
      label: clsx(s.label),
    }

    return (
      <div>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div>
          <input ref={ref} {...rest} />
          <button></button>
          <button></button>
        </div>
      </div>
    )
  }
)
