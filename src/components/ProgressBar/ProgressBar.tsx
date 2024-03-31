import React, { useState } from 'react';
import type { FC, MouseEvent } from 'react';

import { cnProgressBar } from './ProgressBar.classname';

import './ProgressBar.css';

type ProgressBarProps = {
  isLoaded: boolean;
  onLoaded: (setProgressStatus: boolean) => void;
}

const ProgressBar: FC<ProgressBarProps> = ({ isLoaded, onLoaded }) => {
  const [progress, setProgress] = useState({ width: 0, currentProgress: 0, statusHandler: false });

  const handleMouseDown = () => {
    setProgress(prev => ({...prev, statusHandler: true}));
  };

  const handleOnMouseUp = () => {
    setProgress(prev => ({...prev, statusHandler: false}));
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (isLoaded || !progress.statusHandler) {
      return;
    };

    const coordX: number = event.clientX;
    const elementWidh = event.currentTarget.getBoundingClientRect().width;
    const currentProgressBarWidth = coordX - event.currentTarget.getBoundingClientRect().x;
    const currentProgress = Math.round((currentProgressBarWidth / elementWidh) * 100);

    if (currentProgress === 100) {
      setProgress (prev => ({...prev, isHandler: 'off'}));
      onLoaded(true);
    }

    setProgress(prev => ({...prev, width: currentProgressBarWidth, currentProgress: currentProgress}));
  };

  return (
    <div className={cnProgressBar()} onMouseDown={handleMouseDown} onMouseUp={handleOnMouseUp} onMouseMove={handleMouseMove} >
      <div className={cnProgressBar('CurrentProgress')} style={{width: progress.width + 'px'}}>
        <p className={cnProgressBar('CurrentProgressInPercent')}>
          {progress.currentProgress + '%'}
        </p>
      </div>
    </div>
  );
};

export { ProgressBar };
