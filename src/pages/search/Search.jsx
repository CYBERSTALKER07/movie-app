import React, { useState } from 'react';

const Search = ({ videos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videos.filter((video) =>
    video.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search videos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredVideos.map((video, index) => (
          <video key={index} src={video.url} controls width="600" />
        ))}
      </div>
    </div>
  );
};

export default Search;