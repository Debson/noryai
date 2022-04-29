import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/nav-bar/nav-bar.component';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<>test</>} />
      </Routes>
    </BrowserRouter>
  );
};
