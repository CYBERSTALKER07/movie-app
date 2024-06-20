// src/components/loading/Loading.jsx

import React from 'react';
import './loading.css'; // Create this CSS file for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <img src="" alt="Loading" className="loading-image" />
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;