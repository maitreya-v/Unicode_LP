import quizQuestion from "./QuizQuestion";
import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState } from "react";
import './QuestionButtons.css'
const QuestionButtons=(props)=>{
    // const [turnGreen,setGreen]=useState(false);
    // const [turnRed,setRed] = useState(false);
    const currentQuestion=props.currentQuestion;
    // setClicked(false);
    const onClickCheckOptionButton=()=>{
        // setGreen(false);
       if (props.correctAnswer){
          props.onCorrectAnswer();
        //   setGreen(true);
       }
    //    else if(!props.correctAnswer){
        // setRed(true);
    //    else{
    //    }
       if(currentQuestion!==(props.lengthOfQuestion-1))
         props.onSwitchNextQuestion(currentQuestion+1);
         else
         props.onShowFinalResult();
        //  props.changeOptionButtonToGreenOnCorrect();   
    }
    return(
        
        <button type='submit' className='btn firstBtn'  key={props.id} onClick={onClickCheckOptionButton}>{props.options}</button>
        
    );
};

export default QuestionButtons;