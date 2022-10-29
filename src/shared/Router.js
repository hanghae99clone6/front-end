import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
