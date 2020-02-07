import React from 'react';
import "./style.css";

function Score() {
  return (
    <div className="score">
        <span>Score: </span>
        <span className="counter">0</span>
    </div>
  );
}

export default Score;