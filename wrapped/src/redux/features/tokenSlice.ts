import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TokenState {
  value: string
}

const initialState: TokenState = {
  value: '',
}

// value to keep track of 
export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
        setToken: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = tokenSlice.actions
export const tokenReducer = tokenSlice.reducer
