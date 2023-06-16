import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ShakeState {
  value: boolean
}

const initialState: ShakeState = {
  value: false,
}

// boolean to control opening of present
export const shakeSlice = createSlice({
  name: 'shake',
  initialState,
  reducers: {
    startShake: (state) => {
      state.value = true;
    },
    stopShake: (state) => {
      state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { startShake, stopShake } = shakeSlice.actions
export const shakeReducer = shakeSlice.reducer
