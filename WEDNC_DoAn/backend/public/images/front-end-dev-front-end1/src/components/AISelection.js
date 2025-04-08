import React from 'react';
import { useParams } from 'react-router-dom';

function AISelection() {
  const { id } = useParams();
  // Placeholder for AI module selection logic
  const aiModules = ['Module 1', 'Module 2', 'Module 3'];

  const runModule = (module) => {
    // Logic to run AI module on the video
    console.log(`Running ${module} on video ${id}`);
  };

  return (
    <div>
      <h1>Select AI Module for Video {id}</h1>
      <ul>
        {aiModules.map(module => (
          <li key={module} onClick={() => runModule(module)}>{module}</li>
        ))}
      </ul>
    </div>
  );
}

export default AISelection;

