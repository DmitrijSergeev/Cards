import { ComponentProps, ComponentPropsWithoutRef, forwardRef } from 'react'

import Search from '@/assets/icons/search'
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
      value,
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
          {type === 'search' && <Search />}
          <input value={value} />
        </div>
      </div>
    )
  }
)
