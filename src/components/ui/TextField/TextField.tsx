import React, { ChangeEvent, ComponentProps, forwardRef, useState } from 'react'

import { castomUseId } from '@/common/hooks/useId'
import { IconButton } from '@/components/ui/Buttons/IconButton'
import { IcClear } from '@/components/ui/IconsComponents/IcClear/IcClear'
import { IcCloseEye } from '@/components/ui/IconsComponents/IcCloseEye/IcCloseEye'
import { IcOpenEye } from '@/components/ui/IconsComponents/IcOpenEye/IcOpenEye'
import { IcSearch } from '@/components/ui/IconsComponents/IcSearch/IcSearch'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

type TextFieldType = {
  disabled?: boolean
  error?: boolean | null | string
  fullwidth?: boolean
  id?: string
  label?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChangeText?: (value: string) => void
  onEnter?: () => void
  placeholder?: string
} & ComponentProps<'input'>
export const TextField = forwardRef<HTMLInputElement, TextFieldType>((props, ref) => {
  const {
    disabled,
    error,
    fullwidth,
    id,
    label,
    onBlur: customOnBlur,
    onChange,
    onChangeText,
    onEnter,
    onKeyDown,
    placeholder,
    type,
    ...respProps
  } = props

  const [showPassword, setShowPassword] = useState(false)
  const textFieldType = type === 'password' && showPassword ? 'text' : type
  const textFieldId = castomUseId()

  const onClickHandleShowPass = () => {
    setShowPassword(!showPassword)
  }
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeText?.(e.currentTarget.value)
  }
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    customOnBlur?.(e)
  }
  const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const classNames = {
    button: clsx(s.button),
    error: clsx(s.error),
    icClear: clsx(
      type === 'search' && s.icClear,
      type === 'search' && s.withSearch,
      label && s.withLabel
    ),
    icSearch: clsx(type === 'search' && s.icSearch, label && s.withLabel),
    label: clsx(s.labelText),
    showPassword: clsx(s.showPassword, label && s.withLabel, type === 'password' && s.fullwidth),
    textField: clsx(
      s.textField,
      fullwidth && s.fullwidth,
      error && s.errorText,
      type === 'password' && s.withShowPassword
    ),
    textFieldWrapper: clsx(s.textFieldWrapper, fullwidth && s.fullwidth),
  }

  return (
    <div className={classNames.textFieldWrapper}>
      {type === 'search' && (
        <>
          <IconButton className={classNames.icSearch} variant={'secondary'}>
            <IcSearch size={1.3} />
          </IconButton>
          <IconButton className={classNames.icClear}>
            <IcClear size={1.3} />
          </IconButton>
        </>
      )}
      {label && (
        <Typography asChild className={classNames.label} variant={'Body2'}>
          <label>{label}</label>
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
