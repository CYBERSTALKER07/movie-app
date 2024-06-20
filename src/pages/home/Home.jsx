// src/pages/home/Home.jsx

import React from 'react';
import SearchHeader from '../../components/searchheader/SearchHeader';
import CardCarousel from '../../components/cardcarousel/CardCarousel';
import CardWithTabs from '../../components/cardwithtabs/CardWithTabs';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <SearchHeader />
      <CardCarousel />
      <CardWithTabs />
    </div>
  );
};

export default Home;