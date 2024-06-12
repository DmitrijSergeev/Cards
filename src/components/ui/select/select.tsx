import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

export type SelectProps = {
  className?: string
  fullWidth?: boolean
  label?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  ({ className, fullWidth, label }, ref) => {
    const classNames = {
      root: clsx(s.root),
    }

    return (
      <SelectRadix.Root>
        <SelectRadix.Trigger className={classNames.root}></SelectRadix.Trigger>
      </SelectRadix.Root>
    )
  }
)
