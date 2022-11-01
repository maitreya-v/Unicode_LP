import QuizBox from './components/QuizBox';
import './App.css';
import data from './components/Hardcode'
import React from 'react';
import Nav from './components/Nav'
import axios from 'axios';

function App() {
  let [id,setId] =React.useState(0)
  const [attempt,setAttempt] =React.useState(false)
  const [start,setStart]= React.useState(true)
  const [quiz,setQuiz]=React.useState(data)
  // attempt && setAttempt(false)
  function incr(){
    if(id<quiz.length-1){
      setId(prevId=>prevId+1)
    }
  }
  function decr(){
    if(id>0){
      setId(prevId=>prevId-1)
    }
  }
  function quizStart(){
    console.log('test')
    const key ={'X-Api-Key': 'VsTvvwiPOO33HcrFOfrFEGc464dibUQlPChRRvOK'}
    axios.get('https://quizapi.io/api/v1/questions',{headers:key})
    .then((response) => {
      console.log(response.data);
      setQuiz(response.data)
    });
    setStart(false)
  }
  
  return (
    <div className="App">
      {/* {data} */}
      {start && <button onClick={quizStart}>Start</button>}
      {!start && <><QuizBox id={id} quizData={quiz[id]} choiceMade={incr} size={quiz.length} attempt={attempt} setAttempt={setAttempt}/>
      <Nav decr={decr} incr={incr} setAttempt={setAttempt} attempt={attempt}/></>}
    </div>
  )
}

export default App;

{/* <QuizBox id={id} quizData={quiz[id]} choiceMade={incr} size={quiz.length} attempt={attempt} setAttempt={setAttempt}/>
<Nav decr={decr} incr={incr} setAttempt={setAttempt} attempt={attempt}/> */}
// https://quizapi.io/api/v1/questions \
// -H 'X-Api-Key: YOUR_API_KEY'