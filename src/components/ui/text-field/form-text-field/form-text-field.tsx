import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/text-field'

type FormTextFieldProps<T extends FieldValues> = Omit<TextFieldProps, 'id' | 'onChange' | 'value'> &
  UseControllerProps<T>

export const FormTextField = <T extends FieldValues>(props: FormTextFieldProps<T>) => {
  const { control, defaultValue, name, rules, shouldUnregister, ...rest } = props
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <TextField id={name} onChange={onChange} value={value} {...rest} />
}
