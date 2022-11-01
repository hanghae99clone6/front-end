<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
=======
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Home from "../pages/Home";
>>>>>>> 91ca3c5 (.)
=======
import AuthForm from "../components/AuthForm";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
>>>>>>> 008a787 (CRUD 30% 정도완료)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/" element={<Post />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> 91ca3c5 (.)
=======
        <Route path="/" element={<Home />} />
>>>>>>> 008a787 (CRUD 30% 정도완료)
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
