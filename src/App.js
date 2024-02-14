
import { useState,useEffect } from 'react';
import './App.css';

function App() {

 const [solution, setsolution] = useState()

 useEffect(()=>{
  fetch('http://localhost:8000/solutions')
  .then(res=>res.json())
  .then(json=>{
    const randomSolution = json[Math.floor(Math.random()*json.length)]
    setsolution(randomSolution.word)
  })
 },[setsolution])
 console.log(solution)
  return (
    <div className="App">
     <h1>Wordle</h1>
     {solution && <div>The Solution is :{solution}</div>}
    </div>
  );
}

export default App;
