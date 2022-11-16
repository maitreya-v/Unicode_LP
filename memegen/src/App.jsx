import logo from "./logo.svg";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { useContext, useEffect } from "react";
import "@fontsource/roboto/300.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MemeImage from "./components/MemeImage";
import MainMeme from "./components/MainMeme";
import Pagination from "@mui/material/Pagination";
import Button from '@mui/material/Button';
import './context/source';
import styles from "./App.css";
import darkTheme from "./context/source";
function App() {
  const [data, setData] = useState([]);
  const [id, setID] = useState("81913649");
  const [name, setName] = useState("Drake Hotline Bling");
  const [url, setURL] = useState("https://i.imgflip.com/30b1gx.jpg");
  const [boxcount, setBoxCount] = useState(2);
  const [selected, setSelected] = useState(false);
  const [newarr, setNewArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const [currentImages, setCurrentImages] = useState(data.slice(indexOfFirstRecord,indexOfLastRecord));
  // const [theme,setTheme] = useState(0);
  const theme=useContext(darkTheme);
  useEffect(() => {
    const dataRetrieve = async () => {
      const response = await axios
        .get("https://api.imgflip.com/get_memes")
        .then((res) => {
          console.log(res.data.data.memes);
          setData(res.data.data.memes.slice(0, 100));
        });
    };
    dataRetrieve();
  }, []);

  useEffect(()=>{
    setCurrentImages(data.slice(0,10))
  },[]);
  
  const paginationChange=(e,value)=>{
    setCurrentPage(value);
    setCurrentImages(data.slice(indexOfFirstRecord,indexOfLastRecord));
  }
  
  const themeChanger = (e) =>{
    console.log(theme);
    console.log(e);
    }
   
  let newArray = [];
  const selectedIDHandler = (propid, propurl, propname, propboxcount) => {
    setID(propid);
    setName(propname);
    setURL(propurl);
    setBoxCount(propboxcount);
    for (let i = 0; i < propboxcount; i++) {
      setNewArr((prev) => [...prev, i]);
    }
  };
  const unselectHandler = () => {
    
  };
  console.log(theme);
  const arrayGenerator = () => {};
  const onClick = () => {};
  return (
    <>
      <Typography variant="h2" align="center">
        {" "}
        Pick a template
        {" "}
      </Typography>
      <button type="submit" style={{margin:'20px'}} onClick={(e)=>themeChanger(e)}>Dark mode on</button>
      {!selected && (
        <div className={styles.imgholder}>
          <Grid container spacing={2}>
            {currentImages.map((option) => (
            <Grid item>
            <MemeImage
              url={option.url}
              alt={option.name}
              id={option.id}
              box_count={option.box_count}
              selectedID={selectedIDHandler}
              onClick={onClick}
              selectHandler={() => setSelected(true)}
            ></MemeImage>
            </Grid>
          ))}
          </Grid>
          <Pagination count={10} color="primary" style={{margin:'20px'}} onChange={(e,value)=>paginationChange(e,value)}/>
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
