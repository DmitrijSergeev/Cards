import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './textfield.module.scss'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ containerProps, errorMessage, label, labelProps }, ref) => {
    const classNames = {
      label: clsx(s.label),
    }

    return (
      <div>
        <Typography as={'label'} className={classNames.label} variant={'body2'}></Typography>
      </div>
    )
  }
)
