import React from 'react';
import './style.css';
import Image from './../Image';
import Audio from './../Audio';

function Question() {
  return (
    <div className = 'question'>
      <Image className='question__image'/>
      <span className = 'question__name'>******</span>
      <Audio/>
    </div>
  );
}

export default Question;