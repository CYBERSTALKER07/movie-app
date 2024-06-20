import React, { useContext } from 'react';
import { WatchlistContext } from '../../components/context/WatchlistContext';

const WatchlistPage = () => {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <div>
      <h1>Watchlist</h1>
      <div>
        {watchlist.map((video, index) => (
          <div key={index}>
            <video src={video.url} controls width="600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;