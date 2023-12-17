import { useId as useReactId } from 'react'

export const castomUseId = (idFromComponentProps?: string, suffix?: string) => {
  const generatedId = useReactId() + (suffix ? suffix : '')

  return idFromComponentProps ? idFromComponentProps : generatedId
}
