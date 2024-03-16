import React, { useState,useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const[warning,setWarning]=useState('');

  useEffect(()=>{},[count])

  useEffect(()=>{
    if(count < 0){
      setWarning('Count cannot be than 0');
    }
    else if(count >10){
      setWarning('Count cannot be more than 10');
    }
    else{
      setWarning('');
    }
  },[count])
 

  return (
    <div>
      <h1 className="counter-text">
        Count: <span>{count}</span>
      </h1>
      <p className="warning-text">{warning}</p>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increament
        </button>
        <button
          className="btn"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decreament
        </button>
      </div>
    </div>
  );
}

export default App;
