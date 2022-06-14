import Login from "features/auth/Login";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";

export default function BaseLayout() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
