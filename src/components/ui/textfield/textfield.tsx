import { ComponentProps, ComponentPropsWithoutRef, useId } from 'react'

import Search from '@/assets/icons/search'
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
  const { className, containerProps, errorMessage, label, labelProps, type } = props
  const id = useId()
  const classNames = {
    error: clsx(s.error),
    fieldContainer: clsx(s.fieldContainer),
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
      <div className={classNames.fieldContainer}>
        {type === 'search' && <Search className={s.leadingIcon} />}
        <input type={type} />
        <button>+</button>
        <button>x</button>
      </div>
      <Typography className={classNames.error} variant={'error'}>
        {errorMessage}
      </Typography>
    </div>
  )
}
