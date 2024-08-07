import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'
export type CardProps = {} & ComponentPropsWithoutRef<'div'>
export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...rest }, ref) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return <div className={classNames.root} ref={ref} {...rest}></div>
})
