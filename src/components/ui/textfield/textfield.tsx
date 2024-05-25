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
  (
    {
      className,
      containerProps,
      errorMessage,
      id,
      label,
      labelProps,
      onChange,
      placeholder,
      type,
      ...restProps
    },
    ref
  ) => {
    const classNames = {
      label: clsx(s.label, labelProps?.className),
      root: clsx(s.root, containerProps?.className),
    }

    return (
      <div {...containerProps} className={classNames.root}>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'} {...labelProps}>
            {label}
          </Typography>
        )}
        <div>
          <input />
          <button></button>
          <button></button>
        </div>
      </div>
    )
  }
)
