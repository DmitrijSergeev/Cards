import { ReactNode } from 'react'

import s from './Card.module.scss'

export type CardType = {
  children?: ReactNode
  className?: string
}

export const Card = (props: CardType) => {
  const { children, className } = props

  const cardClassName = `${s.card} ${className ? className : ''}`

  return <div className={cardClassName}>{children}</div>
}
