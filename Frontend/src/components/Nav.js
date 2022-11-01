import React from "react";


export default function Nav(props){
    return(
    <div className="main--nav">
        <div onClick={()=>props.decr()}>Back</div>
        <div onClick={()=>props.incr()&props.setAttempt(false)}>{props.attempt?`Next`:`Skip`}</div>
    </div>
    )
}