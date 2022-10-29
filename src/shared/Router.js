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
import Home from "../pages/Home";
>>>>>>> 91ca3c5 (.)

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Post />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
=======
        <Route path="/" element={<Home />} />
>>>>>>> 91ca3c5 (.)
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
