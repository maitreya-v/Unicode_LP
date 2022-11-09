import axios from "axios";
import React, { useState } from "react";
import styles from "./MainMeme.module.css";
const MainMeme = (props) => {
  const [upperText, setUpperText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [customMeme,setCustomMeme] = useState();
  const [finalMeme,showFinalMeme] = useState(false);
  const [arrayLength,setArrayLength]=useState(2);
  const [counter,setCounter] = useState(0);
  const [objArray,setObjArray]=useState([{'text':''},{'text':''},{'text':''},{'text':''}]) ;
  const [newarr,setNewarr] = useState([0,1,2,3]);
  const [boxes,setBoxes] = useState([{'text':'yourmoma'},{'text':'yourfatha'},{'text':'yourmommafatha'}]);
  // const [boxcount,setBoxcount] useState(2);
  const objectToQueryParam = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return "?" + params.join("&");
  };
  const inputToObject = (e,option) =>{
    // const obj={text:e.target.value}
    setObjArray((prev)=>{
      let temparr=[...prev];
      temparr[option]={text:e.target.value};
      return temparr;
    });
  }
  console.log('from obj array');
  console.log(objArray);
  return (
    <div>
      {finalMeme &&
      <>
      <img style={{width:'400px' ,height:'300px'}} src={customMeme} alt="custom meme" />
      </>
      }
      {!finalMeme && <>
        <img
        src={props.selectedURL}
        alt={props.selectedName}
        key={props.selectedID}
        className={styles.img}
      />
      <form
        action=""
        method="POST"
        onSubmit={async (e) => {
          e.preventDefault();
          const params = {
            'template_id': props.selectedID,
            'text0': upperText,
            'text1': bottomText,
            'username': "Maitreya",
            'password': "Maitreya@1235",
            'boxes[0][text]':objArray[0].text,   
            'boxes[1][text]':objArray[1].text,
            'boxes[2][text]':objArray[2].text,
            'boxes[3][text]':objArray[3].text,
          };
          const response = await fetch(
            `https://api.imgflip.com/caption_image${objectToQueryParam(
              params
            )}`
          );
          const json = await response.json();
            setCustomMeme(json.data.url);
            showFinalMeme(true);
        }}
      >
          { 
            props.newarr.map((option)=>(
             <>
              <label htmlFor="upperText">{`Text ${option}`}</label>
         <input 
           type="text" 
           key={option}
           onChange={(e)=>{inputToObject(e,option)}}
         /> 
             </>
            ))
          }
      
        <button
          type="submit"
          onClick={() => {
            // setUpperText("");
            // setBottomText("");
          }}
        >
          Submit
        </button>
      </form>
      </>}
      <button type="submit">Edit this template</button>
      <button type="submit" onClick={()=>setArrayLength(arrayLength+1)}>Add button</button>
      <button type="submit" onClick={props.unselectHandler}>
        Go back
      </button>
    </div>
  );
};

export default MainMeme;
