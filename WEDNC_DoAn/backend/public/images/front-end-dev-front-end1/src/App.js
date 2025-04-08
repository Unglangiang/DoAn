import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoLibrary from './components/VideoLibrary';
import VideoPlayer from './components/VideoPlayer';
import AISelection from './components/AISelection';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<VideoLibrary />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/run-ai/:id" element={<AISelection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

