import { appReducer } from '@/app/appReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store
