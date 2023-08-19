import React, { useState } from 'react'
import SelectionScreen from './SelectionScreen'
import StartScreen from './StartScreen'
import WinnerScreen from './WinnerScreen'
import LoadingScreen from './LoadingScreen'

function BaseComponent({ }) {
  const [displayState, setDisplayState] = useState(4);
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
  } else if(displayState && displayState == "3"){
    return(
      <>
        <WinnerScreen />
      </>
    )
  } else if(displayState && displayState == "4"){
    return(
      <>
        <LoadingScreen />
      </>
    )
  }else {
    return (
      <div>bruh</div>
    )
  }
}



export default BaseComponent