import React from 'react';
import './style.css';
import Option from './Option';
import birdsData from './../../data/birdsData';

function Answers(props) {
  const info = birdsData[props.level];

  const cb = props.cb;

  return (
    <div className = "answers" >
      <ul className = "answers__list">
          <Option name = {info[0].name} line ='0' cb = {cb}/>
          <Option name = {info[1].name} line ='1' cb = {cb}/>
          <Option name = {info[2].name} line ='2' cb = {cb}/>
          <Option name = {info[3].name} line ='3' cb = {cb}/>
          <Option name = {info[4].name} line ='4' cb = {cb}/>
          <Option name = {info[5].name} line ='5' cb = {cb}/>
      </ul>
    </div>
  );
}

export default Answers;