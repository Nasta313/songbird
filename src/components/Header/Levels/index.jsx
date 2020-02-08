import React from 'react';
import "./style.css";
import LevelItem from './LevelItem';

function Levels() {
  return (
  <ul className="levels-list">
      <LevelItem isActive/>
      <LevelItem/>
      <LevelItem/>
      <LevelItem/>
      <LevelItem/>
      <LevelItem/>
    </ul>
  )
}

export default Levels;