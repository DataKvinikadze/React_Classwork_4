import React, { useState } from "react";

const App = () =>{
  const array = ['Alice', 'Bob', 'Charlie', 'Diana']

  // aq i-s imitom vqmni ro tavidanve randomad chaitvirtos
  let i = Math.floor(Math.random() * array.length);
  
  // aq vqmni useStates da name-s vaniweb array-dan randomad saxels
  const [name, SetArray] = useState(array[i])
  
  // vqmni funcqias
  const toggleClick= ()=>{
    // i-s axal random ricxvs vaniweb
   const newIndex = Math.floor(Math.random() * array.length);
  //  Set-it vaniwe axal saxels
   SetArray(array[newIndex])
  }
  return(
    <>
    <h1>Header</h1>
    <button onClick={toggleClick}>Select Random Number</button>
    <br />
    <h1>{`Hello ${name}`}</h1>
    </>
  )
}
export default App
