import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import Answers from './components/Answers';
import Description from './components/Description';
import Button from './components/Button';
//import data from './data';

function App() {
    return (
        <div className = "app-container">
            <Header activeTab = '1'/>
            <Question/>
            <Answers/>
            <Description/>
            <Button/>
        </div>
    );
}

export default App;