import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/Counter/couter.slice";
import taskReducer from "./components/Task/task.slice";
import postReducer from "features/posts/posts.slice";
import authReducer from "features/auth/auth.slice";

export const store = configureStore({
  reducer: {
    shomarande: counterReducer,
    task: taskReducer,
    post: postReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
