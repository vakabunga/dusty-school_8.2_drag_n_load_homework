import React from 'react';

import { cnSuccessfullImage } from './SuccessfullImage.classname';
import Image from '../../img/done.png';

import './SuccessfullImage.css';

const SuccessfullImage = () => {
  return (
    <img className={cnSuccessfullImage()} src={Image} alt="success">
    </img>
  );
};

export { SuccessfullImage };
