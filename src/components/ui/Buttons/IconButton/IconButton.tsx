import React, { ComponentPropsWithoutRef, ElementRef, ElementType, Ref, forwardRef } from 'react'

import { IconProps } from '@/common/icons/IconWrapper'
import { clsx } from 'clsx'

import s from './IconButton.module.scss'

type IconType = React.ReactElement<IconProps>

export type ButtonIconProps<T extends ElementType = 'button'> = {
  as?: T
  backgroundEffect?: boolean
  children?: IconType
  className?: string
  icon?: string
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

const IconButtonBase = <T extends ElementType>(
  props: ButtonIconProps<T>,
  ref: Ref<ElementRef<T>>
) => {
  const {
    as: Component = 'button',
    backgroundEffect = true,
    children,
    className,
    variant,
    ...rest
  } = props

  const iconButtonClasses = {
    button: clsx(
      s.button,
      className,
      variant && s[variant],
      backgroundEffect && s.backgroundEffect,
      !backgroundEffect && s.notBackgroundEffect
    ),
  }

  return (
    <Component className={iconButtonClasses.button} ref={ref as any} {...rest}>
      {children}
    </Component>
  )
}

export const IconButton = forwardRef(IconButtonBase)
