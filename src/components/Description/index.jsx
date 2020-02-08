import React from 'react';
import './style.css';
import Image from './../Image';
import Audio from './../Audio';


function Descrition() {
  return (
    <div className = "description">
      <Image className='description__image'/>
      <div className = "description__name">
        <div>Bird</div>
        <hr/>
        <div>Bird</div>
      </div>
      <Audio/>
      <p className = "description__text">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
    </div>
  );
}

export default Descrition;