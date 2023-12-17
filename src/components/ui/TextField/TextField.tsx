import React, { ChangeEvent, ComponentProps, forwardRef, useState } from 'react'

import { castomUseId } from '@/common/hooks/useId'
import { IconProps } from '@/common/icons/IconWrapper'
import { IconButton } from '@/components/ui/Buttons/IconButton'
import { IcOpenEye } from '@/components/ui/IconsComponents/IcOpenEye/IcOpenEye'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

type TextFieldType = {
  errorText?: boolean | null | string
  fullwidth?: boolean
  iconEnd?: IconProps
  iconStart?: IconProps
  id?: string
  label?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChangeText?: (value: string) => void
  onEnter?: () => void
  placeholder?: string
} & ComponentProps<'input'>
export const TextField = forwardRef<HTMLInputElement, TextFieldType>((props, ref) => {
  const {
    errorText,
    fullwidth,
    iconEnd,
    iconStart,
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

  // const hasIconStart = !!iconStart
  // const hasButtonIconStart = !!buttonIconStart
  //
  // if (hasIconStart && hasButtonIconStart) {
  //   console.error("TextField: Both 'iconStart' and 'buttonIconStart' cannot be used together.")
  //
  //   return null
  // }
  const [showPassword, setShowPassword] = useState(false)
  const textFieldType = type === 'password' && showPassword ? 'text' : type
  const textFieldId = castomUseId()

  const onClickHandleShowPass = () => {
    setShowPassword(showPassword => !showPassword)
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
    errorSpan: clsx(s.errorSpan),
    iconEnd: clsx(iconEnd && s.iconEnd),
    iconStart: clsx(iconStart && s.iconStart),
    label: clsx(s.labelText),
    showPassword: clsx(s.showPassword),
    textField: clsx(
      s.textField,
      fullwidth && s.fullwidth,
      iconStart && s.withIconStart,
      iconEnd && s.withIconEnd,
      errorText && s.errorText,
      type === 'password' && s.withShowPassword
    ),
    textFieldWrapper: clsx(s.textFieldWrapper, fullwidth && s.fullwidth),
  }

  return (
    <div className={classNames.textFieldWrapper}>
      {label && (
        <Typography asChild className={classNames.label} variant={'Body2'}>
          <label>{label}</label>
        </Typography>
      )}
      {iconStart && (
        <div className={classNames.iconStart}>{iconStart ? <>{iconStart}</> : <></>}</div>
      )}
      <input
        className={classNames.textField}
        id={textFieldId}
        onBlur={onBlurCallback}
        onChange={onChangeCallback}
        onKeyDown={onKeyPressCallback}
        placeholder={placeholder}
        ref={ref}
        type={textFieldType}
        {...respProps}
      />
      {errorText && (
        <Typography asChild className={classNames.errorSpan} id={textFieldId}>
          <span>{errorText}</span>
        </Typography>
      )}
      {iconEnd && <div className={classNames.iconEnd}>{iconEnd ? <>{iconEnd}</> : <></>}</div>}
      {type === 'password' && (
        <div className={classNames.showPassword}>
          {showPassword ? (
            <IconButton onClick={onClickHandleShowPass}>
              <IcOpenEye size={1.3} />
            </IconButton>
          ) : (
            <IconButton onClick={onClickHandleShowPass}>
              <IcOpenEye size={1.3} />
            </IconButton>
          )}
        </div>
      )}
    </div>
  )
})
