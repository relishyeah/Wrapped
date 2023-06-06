import { createSlice } from '@reduxjs/toolkit'

export interface LoggedInState {
  value: boolean
}

const initialState: LoggedInState = {
  value: false,
}

// boolean to indicate a user is logged in
// TODO: Make state persistent, store expires_in for token
export const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    logIn: (state) => {
      state.value = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn} = loggedInSlice.actions
export const loggedInReducer = loggedInSlice.reducer
