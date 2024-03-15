import React,{useState} from "react";
import "./App.css";

function App() {

  const[count,setCount]=useState(0);

  function inc(){
    setCount(count+1);
  }

  function dec(){
    setCount(count-1);
  }
  return (
    <div>
      <h1 className="counter-text" >Count: <span>{count}</span></h1>
      <div className="btn-container">
        <button className="btn" onClick={inc}>Increament</button>
        <button className="btn" onClick={dec}>Decreament</button>
      </div>
    </div>
  );
}

export default App;
