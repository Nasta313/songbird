import React from 'react';
import "./style.css";
import Score from './Score';
import Levels from './Levels';
import Logo from './Logo';

function Header() {
  return (
    <div className = "header">
      <div className = "header-top">
        <Logo/>
        <Score/>
      </div>
      <Levels/>
    </div>
  );
}

export default Header;