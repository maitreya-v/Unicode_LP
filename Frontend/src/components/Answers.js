import React from "react";

export default function Answers(props){
    
let styles=props.test
if(styles.backgroundColor){styles ={backgroundColor:props.answer[`${props.choice}_correct`] === 'true' ? '#48bf19' : '#bf0b08' }}
    
    return(
        <div onClick={()=>props.onClick(props.choice)} style={styles}>{props.option[props.choice]}</div>
    )
}
