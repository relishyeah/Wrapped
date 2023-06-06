import { configureStore } from '@reduxjs/toolkit'
import { loadingReducer } from './slices/loadingSlice'
import { loggedInReducer } from './slices/loggedInSlice'
import { animateReducer } from './slices/animateSlice'
import { shakeReducer } from './slices/shakeSlice'
 
export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    loggedIn:loggedInReducer,
    animate: animateReducer,
    shake: shakeReducer
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch