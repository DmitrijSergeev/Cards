import { ComponentPropsWithoutRef, ElementRef, ReactElement, forwardRef } from 'react'

import { useId } from '@/common/hooks/useId'
import { SelectItem } from '@/components/ui/Select/SelectItem'
import { Typography } from '@/components/ui/Typography'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

type Options = {
  title: string
  value: string
}

type SelectProps = {
  classNameItems?: string
  classNameTrigger?: string
  disabled?: boolean
  id?: string
  items: Options[]
  label?: string
  placeholder?: string
} & Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, 'asChild'>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  (props, ref): ReactElement => {
    const {
      classNameItems,
      classNameTrigger,
      disabled,
      id,
      items,
      label,
      open = false,
      placeholder,
      ...restProps
    } = props
    const selectId = useId(id, 'select')
    const classNames = {
      content: clsx(s.content),
      items: clsx(classNameItems),
      label: clsx(s.label, disabled && s.disabled),
      trigger: clsx(s.trigger, disabled && s.disabled, classNameTrigger),
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
              aria-label={'Food'}
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
              <SelectRadix.Content className={classNames.content} position={'popper'}>
                <SelectRadix.ScrollUpButton />
                <SelectRadix.Viewport>
                  {items.map((el, i) => {
                    return (
                      <SelectItem className={classNames.items} key={i} value={el.value}>
                        {el.title}
                      </SelectItem>
                    )
                  })}
                  <SelectRadix.Separator />
                </SelectRadix.Viewport>
                <SelectRadix.ScrollDownButton />
                <SelectRadix.Arrow />
              </SelectRadix.Content>
            </SelectRadix.Portal>
          </SelectRadix.Root>
        </div>
      </>
    )
  }
)
