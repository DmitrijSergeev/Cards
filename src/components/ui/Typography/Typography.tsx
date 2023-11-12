import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './Typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  className?: string
  colorText?: 'colorDefault' | 'light100'
  variant?:
    | 'Body1'
    | 'Body2'
    | 'Caption'
    | 'H1'
    | 'H2'
    | 'H3'
    | 'Large'
    | 'Link1'
    | 'Link2'
    | 'Overline'
    | 'Subtitle1'
    | 'Subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const { as: Component = 'p', children, className, colorText, variant = 'Body1', ...rest } = props

  const typographyClassName = `${s[variant]}  ${
    colorText ? s[colorText] : 'colorDefault'
  } ${className}`

  return (
    <Component className={typographyClassName} {...rest}>
      {children}
    </Component>
  )
}
