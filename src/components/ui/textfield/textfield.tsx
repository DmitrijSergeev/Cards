import { ComponentProps, ComponentPropsWithoutRef, useId } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './textfield.module.scss'

export type TextFieldProps = {
  className?: string
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: TextFieldProps) => {
  const { className, containerProps, label, labelProps } = props
  const id = useId()
  const classNames = {
    label: clsx(s.label),
    root: clsx(s.root),
  }

  return (
    <div {...containerProps} className={classNames.root}>
      {label && (
        <Typography
          {...labelProps}
          as={'label'}
          className={classNames.label}
          id={id}
          variant={'body2'}
        >
          {label}
        </Typography>
      )}
    </div>
  )
}
