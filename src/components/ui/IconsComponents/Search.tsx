import React from 'react'

import { clsx } from 'clsx'

import s from './Search.module.scss'

type SearchProps = {
  color?: string
  size?: number | string
}

export const Search: React.FC<SearchProps> = ({ color, size = 18 }) => {
  const iconStyle = clsx(s.searchIcon, color || s.defaultColor)

  return (
    <svg fill={'none'} height={size} width={size} xmlns={'http://www.w3.org/2000/svg'}>
      <path
        d={
          'm17.7 16.3-3.4-3.4a8 8 0 0 0 .4-9.3 8 8 0 1 0-1.8 10.7l3.4 3.4a1 1 0 1 0 1.4-1.4ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z'
        }
        fill={iconStyle}
      />
    </svg>
  )
}
