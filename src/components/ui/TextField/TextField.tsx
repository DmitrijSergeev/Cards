import React, { ChangeEvent, ComponentProps, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'

import s from './TextField.module.scss'

type TextFieldType = {
  errorText?: string
  id: string
  label?: string
  labelPosition?: 'end' | 'start'
  onChangeText?: (value: string) => void
  onEnter?: () => void
  placeholder?: string
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldType>((props, ref) => {
  const {
    errorText,
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

  const classNames = {
    errorSpan: s.errorSpan,
    labelStylePosition: `${s.labelText} ${s[labelPosition]}`,
    textField: `${s.textField} ${errorText ? s.errorText : ''}`,
    textFieldRoot: s.root,
    textFieldWrapper: s.textFieldWrapper,
  }

  return (
    <div className={classNames.textFieldRoot}>
      <div className={classNames.textFieldWrapper}>
        {' '}
        {label && (
          <Typography as={'label'} className={classNames.labelStylePosition}>
            {label}
          </Typography>
        )}
        <input
          id={id}
          onChange={onChangeCallback}
          onKeyDown={onKeyPressCallback}
          placeholder={placeholder}
          ref={ref}
          {...respProps}
          className={classNames.textField}
          type={'text'}
        />
        {errorText && (
          <Typography as={'span'} className={classNames.errorSpan}>
            {errorText}
          </Typography>
        )}
      </div>
    </div>
  )
})
