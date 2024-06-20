import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/home/Home'; // Adjust the import paths as needed
import Search from './pages/search/Search'; // Adjust the import paths as needed
import Watchlist from './pages/watchlist/Watchlist'; // Adjust the import paths as needed
import BottomnavigationBar from './components/bottomnavigationbar/BottomnavigationBar'; // Adjust the import path as needed
import UploadVideo from './components/UploadVideo/UploadVideo'
function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/uploadvideo" element={<UploadVideo />} />
      </Routes>
      <BottomnavigationBar />
    </Router>
  );
}

export default App;