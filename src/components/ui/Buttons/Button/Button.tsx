import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './Button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  icon?: string
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    icon,
    variant = 'primary',
    ...rest
  } = props

  const buttonClasses = [s[variant], s.button, fullWidth ? s.fullWidth : '', className]

  if (icon) {
    buttonClasses.push(`${s.withIcon}`)
  }

  return (
    <Component className={buttonClasses.join(' ')} {...rest}>
      {icon && <img alt={'Icon'} src={icon} />}
      {children}
    </Component>
  )
}
