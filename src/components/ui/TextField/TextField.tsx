import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

import s from './TextField.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type TextFieldType = Omit<DefaultInputPropsType, 'type'> & {
  error?: ReactNode
  id: string
  label?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
}

export const TextField = (props: TextFieldType) => {
  const { id, label, onChange, onChangeText, onEnter, onKeyDown, ...respProps } = props

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeText?.(e.currentTarget.value)
  }

  const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  return (
    <div className={s.inputWrapper}>
      <label className={s.labelText}>{label}</label>
      <input id={id} onChange={onChangeCallback} onKeyDown={onKeyPressCallback} {...respProps} />
    </div>
  )
}
