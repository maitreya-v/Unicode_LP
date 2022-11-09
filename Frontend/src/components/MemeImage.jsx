import React from "react";
import styles from './MemeImage.module.css';
const MemeImage = props =>{
    const imgClickHandler=()=>{
        props.selectedID(props.id,props.url,props.name,props.box_count);
        props.selectHandler();
    }
     return(
        <>
          <img src={props.url} alt={props.name} key={props.id} className={styles.img} onClick={imgClickHandler}/>
        </>
     );
};

export default MemeImage;