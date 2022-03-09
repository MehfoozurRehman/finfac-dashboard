import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./screens/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
