import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Sidebar from '../components/Sidebar';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
