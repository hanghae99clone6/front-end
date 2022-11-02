import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EnterSignIn from '../pages/EnterSignIn';
import Home from '../pages/Home';
import Post from '../pages/Post';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnterSignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
