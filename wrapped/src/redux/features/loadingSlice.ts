import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoadingState {
  value: boolean
}

const initialState: LoadingState = {
  value: false,
}

//Boolean to indiate if a fetch is happening
export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoad: (state) => {
      state.value = true;
    },
    stopLoad: (state) => {
      state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { startLoad, stopLoad } = loadingSlice.actions
export const loadingReducer = loadingSlice.reducer
