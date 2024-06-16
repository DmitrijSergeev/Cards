import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Search from '@/assets/icons/search'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './textField.module.scss'
export type TextFieldProps = {
  label?: string
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ className, label, type, value, ...rest }, ref) => {
    const classNames = {
      inputWrapper: clsx(s.inputWrapper),
      label: clsx(s.label),
      leftIcon: s.left,
      rightIcon: s.right,
    }

    return (
      <div>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={classNames.inputWrapper}>
          {type === 'search' && <Search className={classNames.leftIcon} />}
          <input ref={ref} {...rest} value={value} />
          <button>x</button>
          <button>+</button>
        </div>
      </div>
    )
  }
)
