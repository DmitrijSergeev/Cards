import { ComponentPropsWithoutRef, ElementRef, ReactElement, forwardRef } from 'react'

import { useId } from '@/common/hooks/useId'
import { SelectItemProps } from '@/components/ui/Select/SelectItem'
import { Typography } from '@/components/ui/Typography'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

type SelectProps = {
  children: ReactElement<SelectItemProps> | ReactElement<SelectItemProps>[]
  classNameContent?: string
  classNameTrigger?: string
  disabled?: boolean
  id?: string
  label?: string
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  side?: 'bottom' | 'left' | 'right' | 'top'
} & Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, 'asChild'>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  (props, ref): ReactElement => {
    const {
      children,
      classNameContent,
      classNameTrigger,
      disabled,
      id,
      label,
      open = false,
      placeholder,
      position = 'popper',
      side = 'bottom',
      ...restProps
    } = props
    const selectId = useId(id, 'select')
    const classNames = {
      content: clsx(s.content, classNameContent),
      items: clsx(s.items),
      label: clsx(s.label, disabled && s.disabled),
      selectScrollButton: clsx(s.selectScrollButton),
      trigger: clsx(s.trigger, classNameTrigger && classNameTrigger),
      triggerIcon: clsx(s.triggerIcon, disabled && s.disabled),
      wrapper: clsx(s.wrapper),
    }

    return (
      <>
        <div className={classNames.wrapper}>
          {label && (
            <Typography asChild className={classNames.label}>
              <label htmlFor={selectId}>{label}</label>
            </Typography>
          )}
          <SelectRadix.Root {...restProps}>
            <SelectRadix.Trigger
              className={classNames.trigger}
              disabled={disabled}
              id={selectId}
              ref={ref}
            >
              <Typography asChild>
                <SelectRadix.Value placeholder={placeholder} />
              </Typography>
              <SelectRadix.Icon className={classNames.triggerIcon}>
                <ChevronDownIcon />
              </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
              <SelectRadix.Content
                align={'start'}
                className={classNames.content}
                position={position}
                side={side}
                sideOffset={-6}
              >
                <SelectRadix.ScrollUpButton className={classNames.selectScrollButton}>
                  <ChevronUpIcon />
                </SelectRadix.ScrollUpButton>
                <SelectRadix.Viewport>
                  {children}
                  <SelectRadix.Separator />
                </SelectRadix.Viewport>
                <SelectRadix.ScrollDownButton className={classNames.selectScrollButton}>
                  <ChevronDownIcon />
                </SelectRadix.ScrollDownButton>
                <SelectRadix.Arrow />
              </SelectRadix.Content>
            </SelectRadix.Portal>
          </SelectRadix.Root>
        </div>
      </>
    )
  }
)
