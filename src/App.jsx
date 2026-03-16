import { useState,useEffect } from "react";

function App(){
  const[score,setScore]=useState(0);
  const[wickets,setWickets]=useState(0);
  const[balls,setBalls]=useState(0);
  const[overs,setOvers]=useState(0);
  const[wideballs,setWideballs]=useState(0);
  const[noballs,setNoballs]=useState(0);

  useEffect(()=> {
    if(balls===6){
      setOvers(prev => prev +1);
      setBalls(0);
    }
  }, [balls]);

  const addScore=(runs)=>{
    setScore(prev => prev+ runs);
    setBalls(prev  => prev + 1);
  };

  const handlewickets = () => {
  setWickets(wickets => {
    if (wickets >= 11) {
      return 11;
    }
    return wickets+1; 
  });
};
 const handlewideballs=()=>{
    setWideballs(prev => prev+1);
    setScore(prev => prev + 1);
};
 
const handlenoballs=()=>{
  setNoballs (prev => prev+ balss);
  setScore(prev => prev + 1);
};

  return(
    <div className="stats">
    <h1>Criket Scoreboard</h1>
    <h2>Score:{score}</h2>
    <h2>wickets:{wickets}</h2>
    <h2>Balls:{balls}</h2>
    <h2>Overs:{overs}</h2>
    <h2>wide balls:{wideballs}</h2>
    <h2>No balls:{noballs}</h2>

    <div className="button">
    <button onClick={()=>{addScore(1)}}>1 Run</button>
    <button onClick={()=>{addScore(2)}}>2 Run</button>
    <button onClick={()=>{addScore(3)}}>3 Run</button>
    <button onClick={()=>{addScore(4)}}>4 Run</button>
    <button onClick={()=>{addScore(5)}}>5 Run</button>
    <button onClick={()=>{addScore(6)}}>6 Run</button>
    </div>

    <button onClick={handlewideballs}>wideballs</button>
    <button onClick={handlenoballs}>Noballs</button>
    <button onClick={handlewickets}>wickets</button>
  </div>
  )


   };
export default App;