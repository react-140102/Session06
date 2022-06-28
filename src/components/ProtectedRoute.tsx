import { authSelector } from "features/auth/auth.slice";
import { useAppSelector } from "hooks/redux";
import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { JsxElement } from "typescript";

export default function ProtectedRoute({
  children,
  role = "user",
}: {
  children: ReactElement;
  role?: string;
}) {
  const auth = useAppSelector(authSelector);
  if (!auth.token) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
}
