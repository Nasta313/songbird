import React from 'react';
import './style.css';
import Option from './Option';

function Answers() {
  return (
    <div className = "answers">
      <ul className = "answers__list">
          <Option/>
          <Option/>
          <Option/>
          <Option/>
          <Option/>
          <Option/>
      </ul>
    </div>
  );
}

export default Answers;