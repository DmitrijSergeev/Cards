import React, { ComponentPropsWithoutRef, ElementRef, ElementType, forwardRef } from 'react'

import { IconProps } from '@/components/ui/IconsComponents/IconWrapper'
import { clsx } from 'clsx'

import s from './IconButton.module.scss'

type IconType = React.ReactElement<IconProps>

export type ButtonIconProps<T extends ElementType> = {
  as?: T
  backgroundEffect?: boolean
  children: IconType
  className?: string
  icon?: string
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const IconButton = forwardRef(
  <T extends ElementType = 'button'>(
    {
      as,
      backgroundEffect = true,
      children,
      className,
      variant,
      ...rest
    }: ButtonIconProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonIconProps<T>>,
    ref: ElementRef<T>
  ) => {
    const Component: ElementType = as || 'button'

    const iconButtonClasses = {
      button: clsx(
        s.button,
        variant && s[variant],
        backgroundEffect && s.backgroundEffect,
        !backgroundEffect && s.notBackgroundEffect,
        className
      ),
    }

    return (
      <Component className={iconButtonClasses.button} {...rest} ref={ref}>
        {children}
      </Component>
    )
  }
)
