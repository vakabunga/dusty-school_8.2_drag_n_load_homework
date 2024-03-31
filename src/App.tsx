import React, { useState } from 'react';

import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { SuccessfullImage } from './components/SuccessfullImage/SuccessfullImage';

import './App.css';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App">
      <ProgressBar isLoaded={isLoaded} onLoaded={setIsLoaded} />
      {isLoaded && <SuccessfullImage />}
    </div>
  );
};

export { App };
