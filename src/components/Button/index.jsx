import React from 'react';
import './style.css';

function Button(props) {

  const divStyleActive = {
    backgroundColor: '#5cb064'
  }

  const divStyleDisabled = {
    backgroundColor: '#3c4855'
  }

  return (
    <div className = 'button'
         onClick = { props.cb }
         style = { (props.isActive) ? divStyleActive : divStyleDisabled }> 
    {props.message} 
    </div>
  );
}

export default Button;