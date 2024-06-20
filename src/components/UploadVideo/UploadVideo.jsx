// src/components/mainpath/MainPath.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import UploadVideo from '../UploadVideo/UploadVideo';
import WatchlistPage from '../../pages/watchlist/Watchlist'; // Import WatchlistPage
import MainLayout from '../mainlayout/MainLayout';
import { PATHS } from '../../components/mainpath/Paths'; // Adjust the import path as needed

const MainPath = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={PATHS.UPLOADVIDEO} element={<UploadVideo />} />
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.WATCHLIST} element={<WatchlistPage />} /> {/* Add Watchlist route */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default MainPath;