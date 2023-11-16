import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'

import { Typography } from '@/components/ui/Typography'

import s from './TextField.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type TextFieldType = Omit<DefaultInputPropsType, 'type'> & {
  error?: ReactNode
  id: string
  label?: string
  labelPosition?: 'end' | 'start'
  onChangeText?: (value: string) => void
  onEnter?: () => void
  placeholder?: string
}

export const TextField = (props: TextFieldType) => {
  const {
    id,
    label,
    labelPosition = 'start',
    onChange,
    onChangeText,
    onEnter,
    onKeyDown,
    placeholder,
    ...respProps
  } = props

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeText?.(e.currentTarget.value)
  }

  const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const textFieldWrapper = s.textFieldWrapper
  const textFieldStyle = s.textFieldLabel
  const labelStylePosition = `${s.labelText} ${s[labelPosition]}`
  const textField = `${s.textField}`

  return (
    <div className={textFieldWrapper}>
      <div className={textFieldStyle}>
        {' '}
        {label && (
          <Typography as={'label'} className={labelStylePosition}>
            {label}
          </Typography>
        )}
        <input
          id={id}
          onChange={onChangeCallback}
          onKeyDown={onKeyPressCallback}
          placeholder={placeholder}
          {...respProps}
          className={textField}
        />
      </div>
    </div>
  )
}
