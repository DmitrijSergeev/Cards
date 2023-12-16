import React, { ComponentPropsWithoutRef, ElementRef, ElementType, Ref, forwardRef } from 'react'

import { IconProps } from '@/common/icons/IconWrapper'
import { clsx } from 'clsx'

import s from './IconButton.module.scss'

type IconType = React.ReactElement<IconProps>

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  backgroundEffect?: boolean
  children?: IconType
  className?: string
  icon?: string
  variant?: 'inputColor' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

const IconButtonBase = <T extends ElementType>(props: ButtonProps<T>, ref: Ref<ElementRef<T>>) => {
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

// const iconButtonClasses = {
//   button: clsx(
//     s.button,
//     variant && s[variant],
//     // eslint-disable-next-line no-nested-ternary
//     backgroundEffect
//       ? !disabled
//         ? s.backgroundEffect
//         : s.notBackgroundEffect
//       : s.notBackgroundEffect,
//     className && className
//   ),
// }
