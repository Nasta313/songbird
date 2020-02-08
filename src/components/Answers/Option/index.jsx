import React from 'react';
import './style.css';

function Option() {
  return (
   <li className = 'answers__option'>
       <div className = 'answers__flag'></div>
       <span className = 'answers__option-name'>Name</span>
   </li>
  );
}

export default Option;