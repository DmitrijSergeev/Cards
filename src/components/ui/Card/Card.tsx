import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import s from './Card.module.scss'

export type CardProps = {
  asChild?: boolean
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { asChild, className, ...otherProps } = props

  const classNames = {
    wrapper: clsx(s.wrapper, className && className),
  }
  const Component = asChild ? Slot : 'div'

  return <Component className={classNames.wrapper} ref={ref} {...otherProps} />
})
