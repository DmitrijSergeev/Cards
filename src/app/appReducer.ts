import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  extraReducers: () => {},
  initialState: {
    isLoading: false,
  },
  name: 'app',
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions

export const appThunk = {}
