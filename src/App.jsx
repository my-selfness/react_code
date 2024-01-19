import { useEffect, useState } from "react";

function App() {
  let [counter,setCounter]= useState(15)

  // let counter = 5
  const addValue=()=>{
    // counter++
    setCounter(counter+1)
    console.log("add btn clicked",counter);
  }
  const removeValue=()=>{
    // counter++
    setCounter(counter-1)
    console.log("remove btn clicked",counter);
  }

  return (
    <>
     <h3>chai aur react</h3>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}>Add Value {counter}</button>
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
