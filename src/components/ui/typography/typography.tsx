import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'
export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children: ReactNode
  className?: string
  variant?:
    | 'Caption'
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'Large'
    | 'Link 1'
    | 'Link 2'
    | 'Overline'
    | 'Subtitle1'
    | 'Subtitle2'
    | 'body1'
    | 'body2'
    | 'error'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
  props: ComponentPropsWithoutRef<T> & TypographyProps<T>
) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props
  const classNames = clsx(className, s[variant])

  return <Component className={classNames} {...rest} />
}
