import './QuizQuestion.css'
import BottomButtons from './BottomButtons';
import QuestionButtons from './QuestionButtons';
import React  from 'react';
import axios from 'axios';
import { useState } from 'react';
const quizQuestion=(props)=>{
  const [color,setColor]=useState(false)
  const onClickHandler=(event)=>{
    console.log(event.target.id);
      setColor(true);
  }
  const [score,setScore]=useState(0);
  const [currentQuestion,setCurrentQuestion]=useState(0);  
  const [showFinalResults,setFinalResults]=useState(false);
  const [showAnswer,setAnswers]=useState(false);
  const [showStartButton,setShowStartButton]=useState(true);
  // const [changeColor,setChangeColor]=useState(false);
  // const [questions,setQuestions]=useState([]);
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];
  const onSwitchNextQuestionHandler=(currentState)=>{
    setCurrentQuestion(currentState);
  };
  const onSwitchBackQuestionHandler=(currentState)=>{
    setCurrentQuestion(currentState);
  }
  const onCorrectAnswerHandler=()=>{
     setScore(score+1);
  }
  const onShowFinalResultsHandler=()=>{
    setFinalResults(true);
  };
  const resetQuiz=()=>{
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }
  const showQuestions=()=>{
     setShowStartButton(false);
     }
  // const changeOptionButtonToGreenOnCorrect=()=>{
  //   setChangeColor(true);
  // }
  // const testingArray=[];
  // const onStartQuizHandler=()=>{
  //   axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple')
  //   .then((res)=>{
  //     res.data.results.map((question)=>{
  //       questionText:question.question,
  //       correct_answer:question.correct_answer,
          
  //     })
  //   })
  // }
  // let questions={
  //   text,
  //   options,
  //   isCorrect,
  // }
  // const generateQuestionAnswerObject=(res)=>{
  //    questions.text=res.data.results[currentQuestion].question;
  //    console.log(questions.text)
      
  // }
    return( 
        <div className='questionHolder'>
          
          {showFinalResults ? (
            <div className='finalResult'>
              <p className='quizOverText'>Quiz is over</p>
              <p className='scoreDisplayFinalResult'>
                {score>2?(<p className='scoreDisplayFinalResultChild'>Yayy </p>):(<p className='scoreDisplayFinalResultChild'>Aww </p>)}your score is {score} out of {questions.length}</p> <br />
              <button className='btn' onClick={resetQuiz}>Play Again</button>
              <button className='btn'>Show Answers</button>
            </div>
          )
          :(
            <div>
            {showStartButton ? (
              <div className='startButtonHolder'>
                <div className='startButtonText'>Ready to test your knowledge?</div>
                <div>
              <button type='submit' className='btn startButton' onClick={showQuestions}>Start Quiz</button>
                </div>
              </div>
            ):(
            <div>
          <div className='question'>
            <div className='parent'>
            <h2 className='child'>Question <span className='currentQuestion'>{currentQuestion+1}</span>/{questions.length}</h2>
            <h2 className='child scoreChild'>Score {score}/{questions.length}</h2>
            </div>
            <p className='quizQuestion'>{questions[currentQuestion].text}</p>
              {questions[currentQuestion].options.map((option)=>{
                return(
                  <div className='optionButtonHolder'>
                  <QuestionButtons options={option.text} key={option.id} correctAnswer={option.isCorrect} onCorrectAnswer={onCorrectAnswerHandler} currentQuestion={currentQuestion} onSwitchNextQuestion={onSwitchNextQuestionHandler} lengthOfQuestion={questions.length} onShowFinalResult={onShowFinalResultsHandler}></QuestionButtons>
                  </div>
                );
              })
            }
          </div>
          <BottomButtons lengthOfQuestion={questions.length} currentQuestion={currentQuestion} onSwitchNextQuestion={onSwitchNextQuestionHandler} onSwitchBackQuestion={onSwitchBackQuestionHandler}></BottomButtons>
          </div>
            )
          }
          </div>
          )
          
}
          </div>
          
    );
};

export default quizQuestion;