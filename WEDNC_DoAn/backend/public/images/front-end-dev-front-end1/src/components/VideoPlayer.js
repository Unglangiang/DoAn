import React from 'react';
import { useParams, Link } from 'react-router-dom';

function VideoPlayer() {
  const { id } = useParams();
  // Placeholder for video player logic
  return (
    <div>
      <h1>Playing Video {id}</h1>
      <video controls>
        <source src={`path/to/video/${id}.mp4`} type="video/mp4" />
      </video>
      <div>
        <Link to={`/run-ai/${id}`}>Run AI Module</Link>
      </div>
    </div>
  );
}

export default VideoPlayer;

