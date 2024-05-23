import { ComponentPropsWithoutRef } from 'react'

import s from './button.module.scss'

export type ButtonProps = {
  fullWidth: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>

export const Button = ({ className, fullWidth, variant = 'primary', ...rest }: ButtonProps) => {
  const classNames = {
    root: s.root,
  }

  return (
    <button
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}
