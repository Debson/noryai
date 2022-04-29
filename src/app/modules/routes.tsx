import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/nav-bar/nav-bar.component';
const HomeContainer = React.lazy(() => import('./home/home.container'));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
