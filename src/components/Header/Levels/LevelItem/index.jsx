import React from 'react';
import "./style.css";

function LevelItem(props) {
  if(props.isActive) {
    return <li className='item active' >qwerty</li>
  } else {
    return <li className='item' >qwerty</li>
  }

}

export default LevelItem;