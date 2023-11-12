import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppRootStateType } from '@/app/store'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()

/** Кастомный useAppSelector (что бы не типизировать каждый раз при вызове) */
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
