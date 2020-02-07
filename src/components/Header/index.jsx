import React from 'react';
import "./style.css";
import logo from "./../../images/songbird.png";
import Score from './Score';
import Levels from './Levels';

function Header() {
  return (
    <div className = "header">
      <div className = "header-top">
        <img  className = "logo" src = {logo} alt ="logo"></img>
        <Score/>
      </div>
      <Levels/>
    </div>
  );
}

export default Header;