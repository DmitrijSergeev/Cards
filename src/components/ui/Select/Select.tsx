import { ComponentPropsWithoutRef, ElementRef, ReactElement, forwardRef, useState } from 'react'

import { useId } from '@/common/hooks/useId'
import { SelectItem } from '@/components/ui/Select/ItemSelect'
import { Typography } from '@/components/ui/Typography'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

type SelectProps = {
  id?: string
  items: any[]
  label?: string
  open?: boolean | null
  placeholder?: string
} & Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, 'asChild'>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  (props, ref): ReactElement => {
    const { id, items, label, open = false, placeholder, ...restProps } = props

    const [openSelect, setOpenSelect] = useState(open)

    const selectId = useId(id, 'select')
    const classNames = {
      label: clsx(s.label),
      trigger: clsx(s.trigger),
      wrapper: clsx(s.wrapper),
    }
    const onValueChangeHandler = () => {}
    const onClickOpenSelect = () => {
      setOpenSelect(!openSelect)
    }

    return (
      <>
        <div className={classNames.wrapper}>
          {label && (
            <Typography asChild className={classNames.label}>
              <label htmlFor={selectId}>{label}</label>
            </Typography>
          )}
          <SelectRadix.Root
            onOpenChange={onClickOpenSelect}
            // defaultValue={items?.[1]}

            onValueChange={onValueChangeHandler}
            open={openSelect}
            {...restProps}
          >
            <SelectRadix.Trigger
              aria-label={'Food'}
              className={classNames.trigger}
              id={selectId}
              ref={ref}
            >
              <Typography asChild>
                <SelectRadix.Value placeholder={placeholder} />
              </Typography>
              <SelectRadix.Icon className={'SelectIcon'}>
                <ChevronDownIcon />
              </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
              <SelectRadix.Content>
                <SelectRadix.ScrollUpButton />
                <SelectRadix.Viewport>
                  {items.map((el, i) => {
                    return (
                      <SelectItem key={i} value={el}>
                        {el}
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
