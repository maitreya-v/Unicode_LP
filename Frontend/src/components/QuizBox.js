import React from "react";
import Question from "./question";
import Options from "./options";


// const opt = {id:1,opt1:'A)OPTION 1',opt2:'B)OPTION 2',opt3:'C)OPTION 3',opt4:'D)OPTION 4'}


export default function QuizBox(props){
   
    return(
        
        <div className="main">
        <Question id={props.id} quest={props.quizData.question} />
        <Options  opt={props.quizData.answers} ans={props.quizData.correct_answers} choiceMade={props.choiceMade} size={props.size} attempt={props.attempt} setAttempt={props.setAttempt}/>
        </div>
    )
}