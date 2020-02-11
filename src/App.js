import React from 'react';

import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import Answers from './components/Answers';
import Description from './components/Description';
import Button from './components/Button';
import voiseWrong from './data/correctAnswer.mp3';
import voiseCorrect from './data/uncorrectAnswer.mp3';

class App extends React.Component {

    constructor(props){
        super(props);
        this.dataLength = this.props.birdsData.length-1;
        this.clickedItems = [];

        this.state = {
            level: '0',
            currentScore: 0,
            chosenOption: null,
            questionVisivility: false,
            isActiveButton: false,
            rightAnswer: String(this.props.getRandomInteger(0, this.dataLength)),
            increase: 5
        }
    }
    
    levelUp = () => {
        if ( this.state.isActiveButton ) {
            this.setState({
                level: String(+this.state.level + 1),
                rightAnswer: String(this.props.getRandomInteger(0, this.dataLength)),
            }, () => {
                this.clickedItems = [];

                this.setState({
                    chosenOption: null,
                    isActiveButton: false,
                    questionVisibility: false,
                    increase: 5
                })
            })
        }
        
    }  

    checkCorrectAnswer = (line) => { 
        console.log('line', line);
        console.log(this.clickedItems);
        
        if ( this.state.chosenOption === this.state.rightAnswer) {
            this.playAudio(voiseWrong);
            this.setState({
                isActiveButton: true,
                questionVisibility: true,
                currentScore: this.state.currentScore + this.state.increase,
            })
        } else {
            this.playAudio(voiseCorrect);
            this.setState({
                increase: this.state.increase - 1,
                
            })
        }
    }

    handleClick = ( line ) => {
        this.setState({
            chosenOption: line,
        });

        if (!this.clickedItems.includes(line)){
            this.clickedItems.push(line);
            this.setState({
                chosenOption: line,
            }, () => {
                this.checkCorrectAnswer(line);
            })
        }
        
    }

    updateApp = ( ) => {
        this.setState({
            level: '0',
            currentScore: 0,
            chosenOption: null,
            questionVisivility: false,
            isActiveButton: false,
            rightAnswer: String(this.props.getRandomInteger(0, this.dataLength)),
            increase: 5
        })
    }
  
    playAudio = (file) => {
        var audio = new Audio(file);
        audio.play();
    }

    render() { 
      

        if ( +this.state.level === 5) {
            return (
                <div className = 'app-container'>
                    <Header
                        level = { this.state.level }
                        currentScore = { this.state.currentScore }
                    />
                   <div>
                        <h1>Поздравляем!</h1>
                        <p>Ты прошел викторину и набрал {this.state.currentScore} из 30 возможных баллов</p>
                   </div>
                    <Button 
                        cb = {this.updateApp}
                        isActive = 'true'
                        message ='Может попробуещь еще раз?:)'
                    />
                </div>
            )
        } else{
            return (
                <div className = 'app-container'>
                    <Header
                        level = { this.state.level }
                        currentScore = { this.state.currentScore }
                    />
                    <Question
                        level = { this.state.level }
                        visibility = { this.state.questionVisibility }
                        rightAnswer = { this.state.rightAnswer }
                    />
                    <Answers 
                        level = { this.state.level } 
                        cb = { this.handleClick }
                    />
                    <Description 
                        level = { this.state.level } 
                        choise = { this.state.chosenOption }
                    />
                    <Button 
                        cb = { this.levelUp }
                        isActive = {this.state.isActiveButton}
                        message ='Перейти к следующему вопросу'
                    />
                </div>
            )
        }
       
    }
    
}

export default App;