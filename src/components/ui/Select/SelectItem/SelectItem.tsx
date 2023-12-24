import { ComponentPropsWithoutRef, ElementRef, ReactElement, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './SelectItem.module.scss'

type SelectItemProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof SelectRadix.Item>, 'asChild'>

export const SelectItem = forwardRef<ElementRef<typeof SelectRadix.Item>, SelectItemProps>(
  (props, ref): ReactElement => {
    const { children, ...otherProps } = props
    const classNames = {
      item: clsx(s.item),
    }

    return (
      <SelectRadix.Item className={classNames.item} ref={ref} {...otherProps}>
        <SelectRadix.ItemText>
          <Typography>{children}</Typography>
        </SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
