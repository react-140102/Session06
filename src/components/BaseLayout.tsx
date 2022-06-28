import Login from "features/auth/Login";
import { Posts } from "features/posts/Posts";
import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { Comments } from "./Comments";
import { NotFound } from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";
import TaskList from "./Task/TaskList";
import { Todos } from "./Todos";

const Photos = lazy(() =>
  import("./Photos").then(({ Photos }) => ({ default: Photos }))
);
const PhotoDetail = lazy(() =>
  import("./PhotoDetail").then(({ PhotoDetail }) => ({ default: PhotoDetail }))
);
const Counter = lazy(() => import("./Counter/Couter"));

export default function BaseLayout() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={
            <>
              <h1>HOME</h1>
            </>
          }
        />
        <Route
          path="posts"
          element={
            <ProtectedRoute role="admin">
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route
          path="tasks"
          element={
            <ProtectedRoute>
              <TaskList />
            </ProtectedRoute>
          }
        />
        <Route path="comments" element={<Comments />} />
        <Route path="todos" element={<Todos />} />
        <Route
          path="photos"
          element={
            <Suspense fallback={<div>loading ...</div>}>
              <Photos />
            </Suspense>
          }
        />
        <Route
          path="photos/:id"
          element={
            <Suspense fallback={<div>loading ...</div>}>
              <PhotoDetail />
            </Suspense>
          }
        />
        <Route
          path="counter"
          element={
            <Suspense fallback={<div>loading ...</div>}>
              <Counter />
            </Suspense>
          }
        />

        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
