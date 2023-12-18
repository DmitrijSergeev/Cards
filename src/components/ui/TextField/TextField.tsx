import React, { ChangeEvent, ComponentProps, forwardRef, useState } from 'react'

import { useId } from '@/common/hooks/useId'
import { IconButton } from '@/components/ui/Buttons/IconButton'
import { IcClear } from '@/components/ui/IconsComponents/IcClear/IcClear'
import { IcCloseEye } from '@/components/ui/IconsComponents/IcCloseEye/IcCloseEye'
import { IcOpenEye } from '@/components/ui/IconsComponents/IcOpenEye/IcOpenEye'
import { IcSearch } from '@/components/ui/IconsComponents/IcSearch/IcSearch'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

type BaseTextFieldProps = {
  disabled?: boolean
  error?: boolean | null | string
  fullwidth?: boolean
  id?: string
  label?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChangeText?: (value: string) => void
  onClickSearch?: () => void
  onEnter?: () => void
  placeholder?: string
} & Omit<ComponentProps<'input'>, 'type'>

type SearchTextFieldProps = BaseTextFieldProps & {
  type: 'search'
}
type PasswordTextFieldProps = BaseTextFieldProps & {
  type: 'password'
}
type TextTextFieldProps = BaseTextFieldProps & {
  type?: 'text'
}

type TextFieldProps = PasswordTextFieldProps | SearchTextFieldProps | TextTextFieldProps

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    disabled,
    error,
    fullwidth,
    id,
    label,
    onBlur: customOnBlur,
    onChange,
    onChangeText,
    onClickSearch,
    onEnter,
    onKeyDown,
    placeholder,
    type = 'text',
    ...respProps
  } = props

  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const showClearButton = value.length! > 0
  const textFieldType = type === 'password' && showPassword ? 'text' : type
  const textFieldId = useId(id, 'textField')

  const onClickHandleShowPass = () => {
    setShowPassword(!showPassword)
  }
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    const value = e.currentTarget.value

    onChangeText?.(value)
    setValue(value)
  }
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    customOnBlur?.(e)
  }
  const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const onClickHandlerSearchButton = () => {
    if (type === 'search' && onClickSearch && !disabled) {
      onClickSearch()
    }
  }

  const onClickClearSearchText = () => {
    if (!disabled) {
      setValue('')
    }
  }

  const classNames = {
    btnClear: clsx(type === 'search' && s.btnClear, label && s.withLabel),
    btnSearch: clsx(type === 'search' && s.btnSearch, label && s.withLabel),
    button: clsx(s.button),
    error: clsx(s.error),
    label: clsx(s.labelText),
    showPassword: clsx(s.showPassword, label && s.withLabel, type === 'password' && s.fullwidth),
    textField: clsx(
      s.textField,
      fullwidth && s.fullwidth,
      error && s.errorText,
      type === 'password' && s.withShowPassword,
      type === 'search' && s.withSearchType
    ),
    textFieldWrapper: clsx(s.textFieldWrapper, fullwidth && s.fullwidth),
  }

  return (
    <div className={classNames.textFieldWrapper}>
      {type === 'search' && (
        <>
          <IconButton
            className={classNames.btnSearch}
            disabled={disabled}
            onClick={onClickHandlerSearchButton}
            variant={'secondary'}
          >
            <IcSearch size={1.3} />
          </IconButton>
          {showClearButton && (
            <IconButton
              className={classNames.btnClear}
              disabled={disabled}
              onClick={onClickClearSearchText}
              type={'reset'}
            >
              <IcClear size={1.3} />
            </IconButton>
          )}
        </>
      )}
      {label && (
        <Typography asChild className={classNames.label} variant={'Body2'}>
          <label htmlFor={textFieldId}>{label}</label>
        </Typography>
      )}
      <input
        className={classNames.textField}
        disabled={disabled}
        id={textFieldId}
        onBlur={onBlurCallback}
        onChange={onChangeCallback}
        onKeyDown={onKeyPressCallback}
        placeholder={placeholder}
        ref={ref}
        type={textFieldType}
        value={value}
        {...respProps}
      />
      {error && (
        <Typography asChild className={classNames.error} id={textFieldId}>
          <span>{error}</span>
        </Typography>
      )}
      {type === 'password' && (
        <div className={classNames.showPassword}>
          {showPassword ? (
            <IconButton disabled={disabled} onClick={onClickHandleShowPass}>
              <IcCloseEye size={1.3} />
            </IconButton>
          ) : (
            <IconButton disabled={disabled} onClick={onClickHandleShowPass}>
              <IcOpenEye size={1.3} />
            </IconButton>
          )}
        </div>
      )}
    </div>
  )
})
