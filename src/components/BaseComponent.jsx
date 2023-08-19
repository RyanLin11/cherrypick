import React, { useState } from 'react'
import SelectionScreen from './SelectionScreen'
import StartScreen from './StartScreen';

function BaseComponent({ }) {
  const [displayState, setDisplayState] = useState(2);
  // const socket = io("http://localhost:3000");

  // socket.on("connect", () => {
  //   console.log("You connected with id: ${socket.id}")
  // })

  if (displayState && displayState == "1") {
    return (
      <>
        <SelectionScreen />
      </>
    )
  } else if(displayState && displayState == "2"){
    return(
      <>
        <StartScreen />
      </>
    )
  }else {
    return (
      <div>bruh</div>
    )
  }
}



export default BaseComponent