import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './components/Counter/couter.slice' ;
import taskReducer from './components/Task/task.slice' ;

export const store = configureStore({
  reducer: {
    shomarande: counterReducer,
    task: taskReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch