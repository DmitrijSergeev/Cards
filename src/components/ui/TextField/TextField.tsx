import React, { ChangeEvent, ComponentProps, ReactNode, forwardRef, useState } from 'react'

import { Typography } from '@/components/ui/Typography'

import s from './TextField.module.scss'

type TextFieldType = {
  errorText?: string
  iconStart?: ReactNode
  id: string
  label?: string
  labelPosition?: 'end' | 'start'
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChangeText?: (value: string) => void
  onEnter?: () => void
  placeholder?: string
  search?: boolean
  type?: 'password' | 'text'
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldType>((props, ref) => {
  const {
    errorText,
    iconStart,
    id,
    label,
    labelPosition = 'start',
    onBlur: customOnBlur,
    onChange,
    onChangeText,
    onEnter,
    onKeyDown,
    placeholder,
    search = false,
    type = 'text',
    ...respProps
  } = props

  const [showIconAndPlaceholder, setShowIconAndPlaceholder] = useState(true)

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeText?.(e.currentTarget.value)

    setShowIconAndPlaceholder(false)
  }

  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    setShowIconAndPlaceholder(!e.currentTarget.value)

    customOnBlur?.(e)
  }
  const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const classNames = {
    errorSpan: s.errorSpan,
    iconStart: s.iconStart,
    labelStylePosition: `${s.labelText} ${s[labelPosition]}`,
    placeholderWithIcon: showIconAndPlaceholder && iconStart ? s.placeholderWithIcon : '',
    textField: `${s.textField} ${iconStart ? s.placeholderWithIcon : ''} ${
      errorText ? s.errorText : ''
    }`,
    textFieldRoot: s.root,
    textFieldWrapper: s.textFieldWrapper,
  }

  return (
    <div className={classNames.textFieldRoot}>
      <div className={classNames.textFieldWrapper}>
        {label && (
          <Typography asChild className={classNames.labelStylePosition}>
            <label>{label}</label>
          </Typography>
        )}
        {iconStart && (
          <Typography asChild className={classNames.iconStart}>
            <span>{iconStart}</span>
          </Typography>
        )}
        <input
          id={id}
          onBlur={onBlurCallback}
          onChange={onChangeCallback}
          onKeyDown={onKeyPressCallback}
          placeholder={placeholder}
          ref={ref}
          {...respProps}
          className={classNames.textField}
          type={'text'}
        />
        {errorText && (
          <Typography asChild className={classNames.errorSpan}>
            <span>{errorText}</span>
          </Typography>
        )}
      </div>
    </div>
  )
})
