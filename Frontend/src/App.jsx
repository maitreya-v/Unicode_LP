import logo from "./logo.svg";
import axios from "axios";
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import "@fontsource/roboto/300.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MemeImage from "./components/MemeImage";
import MainMeme from "./components/MainMeme";
import styles from "./App.css";
function App() {
  const [data, setData] = useState([]);
  const [id, setID] = useState("81913649");
  const [name, setName] = useState("Drake Hotline Bling");
  const [url, setURL] = useState("https://i.imgflip.com/30b1gx.jpg");
  const [boxcount,setBoxCount] = useState(2);
  const [selected, setSelected] = useState(false);
  const [newarr,setNewArr] = useState([]);
  useEffect(() => {
    const dataRetrieve = async () =>{
      const response = await axios.get("https://api.imgflip.com/get_memes").then((res) => {
        console.log(res.data.data.memes);
        setData(res.data.data.memes.slice(0,10));
      });
    }
    dataRetrieve();
  }, []);
  let newArray=[];
  const selectedIDHandler = (propid, propurl, propname,propboxcount) => {
    setID(propid);
    setName(propname);
    setURL(propurl);
    setBoxCount(propboxcount);
    for(let i=0;i<propboxcount;i++){
        setNewArr((prev)=>[...prev,i])
    }
    };
  const unselectHandler=()=>{
    setSelected(false);
  };
  const arrayGenerator=()=>{};
  const onClick = () => {};
  return (
    <>
        <Typography variant="h2" align="center"> Pick a template </Typography>
      {!selected && (
        <div className={styles.imgholder}>
          {data.map((option) => (
            <MemeImage
              url={option.url}
              alt={option.name}
              id={option.id}  
              box_count={option.box_count}
              selectedID={selectedIDHandler}
              onClick={onClick}
              selectHandler={()=>setSelected(true)}
            ></MemeImage>
          ))}
        </div>
      )}
      {selected && (
        <MainMeme
          selectedID={id}
          selectedURL={url}
          selectedName={name}
          boxcount={boxcount}
          data={data}
          unselectHandler={unselectHandler}
          arrayGenerator={arrayGenerator}
          newarr={newarr}
        />
      )}
    </>
  );
}

export default App;
