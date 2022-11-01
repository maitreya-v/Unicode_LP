import React from "react";
import Answers from "./Answers";






export default function Options(props){
    const [res,setRes] = React.useState(0)
    const [score,setScore]= React.useState('')
    let test
    function disp(opt){
        if(props.ans[`${opt}_correct`]==='true')
        { 
            
            setRes(prevScore=>prevScore+1) 
            setScore('Correct')
            
            // props.choiceMade()
            
        }
        else{
            // props.choiceMade()
            setScore('Incorrect')
            
        }
        !props.attempt && props.setAttempt(true)
        
    
    }
    props.attempt ? test={backgroundColor : 'cyan'}: test ={}
    return(
        <> 
        <div className="main--option">
            {/* {console.log(styles('answer_a'))} */}
            
            <Answers choice='answer_a' test ={test} onClick={disp} option={props.opt} answer={props.ans} update={props.attempt}/>
            <Answers choice='answer_b' test ={test} onClick={disp} option={props.opt} answer={props.ans} update={props.attempt}/>
            {props.opt['answer_c'] === null ?? console.log('true false')}
            <Answers choice='answer_c' test ={test} onClick={disp} option={props.opt} answer={props.ans} update={props.attempt}/>
            <Answers choice='answer_d' test ={test} onClick={disp} option={props.opt} answer={props.ans} update={props.attempt}/>

        </div>
        <div className="main--result">{res}/{props.size}{props.attempt&&<div>{score}</div>}</div>
        
        </>
    
    )
}
{/* <div onClick={()=>disp('answer_a') & props.upClick('answer_a')} style={props.style}>{props.opt.answer_a}</div>  */}
{/* <div onClick={()=>disp('answer_b') & props.upClick('answer_b')} style={props.style}>{props.opt.answer_b}</div>  */}
{/* <div onClick={()=>disp('answer_c') & test('answer_c')} style={props.style}>{props.opt.answer_c}</div> 
<div onClick={()=>disp('answer_d') & test('answer_d')} style={props.style}>{props.opt.answer_d}</div>  */}