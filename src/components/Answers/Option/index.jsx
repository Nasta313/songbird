import React from 'react';
import './style.css';

function Option(props) {
  
  const handleClick = props.cb;
  
  return (
   <li className = 'answers__option'  onClick = {() => {handleClick(props.line)}}>
      <div className = 'answers__flag'></div>
      <span className = 'answers__option-name'>{props.name}</span>
   </li>
  );
}

export default Option;