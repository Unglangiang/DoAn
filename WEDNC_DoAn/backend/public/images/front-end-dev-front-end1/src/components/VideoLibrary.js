import React from 'react';
import { Link } from 'react-router-dom';

function VideoLibrary() {
  // This is a placeholder. Fetch video list from API and display them.
  const videos = [{ id: 1, name: 'Sample Video' }, { id: 2, name: 'Another Video' }];

  return (
    <div>
      <h1>Video Library</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <Link to={`/video/${video.id}`}>{video.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoLibrary;

