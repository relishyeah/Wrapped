import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AnimateState {
  value: boolean
}

const initialState: AnimateState = {
  value: false,
}

// boolean to control opening of present
export const animateSlice = createSlice({
  name: 'animate',
  initialState,
  reducers: {
    startAnimate: (state) => {
      state.value = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { startAnimate } = animateSlice.actions
export const animateReducer = animateSlice.reducer
