import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './table.module.scss'
export type TableProps = {
  className?: string
} & ComponentPropsWithoutRef<'table'>
export const Table = forwardRef<ElementRef<'table'>, TableProps>(({ className, ...rest }, ref) => {
  const classNames = {
    root: clsx(s.table, className),
  }

  return <table className={classNames.root} ref={ref} {...rest} />
})
