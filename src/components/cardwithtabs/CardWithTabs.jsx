// src/components/cardwithtabs/CardWithTabs.jsx

import React from 'react';
import ScrollableTabsButtonForce from './ScrollableTabsButtonForce';
import './CardWithTabs.css';

const CardWithTabs = () => {
  return (
    <div className="card-with-tabs">
      <ScrollableTabsButtonForce />
      <div className="tab-content">
        {/* Add content for each tab here */}
      </div>
    </div>
  );
};

export default CardWithTabs;