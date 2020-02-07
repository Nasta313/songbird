import React from 'react';
import './style.css';
import img from './../../images/problem.png'

function Question() {
  return (
    <div className = "question">
      <div className = "question__info">
        <img className = "question__image" src={img} alt="bird"/>
        <span className = "questio__name">******</span>
      </div>
      <audio src="#"></audio>
       
        Когда игрок выбирает правильный ответ, в блоке с вопросом отображаются название и изображение птицы, голос которой звучвл.
    </div>
  );
}

export default Question;