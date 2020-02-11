import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import birdsData from './data/birdsData';

const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

ReactDOM.render(
    <App 
        getRandomInteger = { getRandomInteger }
        birdsData = { birdsData }
    />,
    document.getElementById('root')
);
