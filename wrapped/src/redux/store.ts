import { configureStore } from '@reduxjs/toolkit'
import { loadingReducer } from './features/loadingSlice'
import { loggedInReducer } from './features/loggedInSlice'
import { animateReducer } from './features/animateSlice'
import { shakeReducer } from './features/shakeSlice'
import { tokenReducer } from './features/tokenSlice'
 
export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    loggedIn:loggedInReducer,
    animate: animateReducer,
    shake: shakeReducer,
    token: tokenReducer
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch