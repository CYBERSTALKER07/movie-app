// src/components/mainlayout/MainLayout.jsx
import React from 'react';
import BottomNavigationBar from '../bottomnavigationbar/BottomnavigationBar';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="content">
        {children}
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default MainLayout;