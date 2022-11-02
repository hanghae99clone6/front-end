import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
