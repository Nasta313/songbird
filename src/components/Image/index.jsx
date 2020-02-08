import React from 'react';
import './style.css';
import img from './../../images/problem.png';

function Image(props) {
  return (
    <img  className = {`${props.className} image`} src={img} alt="bird"/>
  );
}

export default Image;