// src/components/mainpath/MainPath.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import VideoUpload from '../UploadVideo/UploadVideo';
import Watchlist from '../../pages/watchlist/Watchlist'; // Import WatchlistPage
import MainLayout from '../mainlayout/MainLayout';
import { PATHS } from './Paths'; // Adjust the import path as needed
import Search from '../../pages/search/Search';

const MainPath = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={PATHS.SEARCH} element={<Search />} />
        <Route path={PATHS.UPLOAD} element={<VideoUpload />} />
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.WATCHLIST} element={<Watchlist />} /> {/* Add Watchlist route */}
      </Routes>
    </MainLayout>
  );
};

export default MainPath;