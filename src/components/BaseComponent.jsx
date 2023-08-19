import React, { useState } from 'react'
import SelectionScreen from './SelectionScreen'
import StartScreen from './StartScreen';
import LobbyScreen from './LobbyScreen';

function BaseComponent({ }) {
  const [displayState, setDisplayState] = useState(1);
  // const socket = io("http://localhost:3000");

  // socket.on("connect", () => {
  //   console.log("You connected with id: ${socket.id}")
  // })

  if (displayState && displayState == "1") {
    return (
      <>
        <StartScreen setDisplayState={setDisplayState}/>
      </>
    )
  } else if (displayState && displayState == "2") {
    return (
      <>
        <LobbyScreen setDisplayState={setDisplayState} />
      </>
    )
  } else if(displayState && displayState == "3"){
    return(
      <>
        <SelectionScreen setDisplayState={setDisplayState}/>
      </>
    )
  }else {
    return (
      <div>bruh</div>
    )
  }
}



export default BaseComponent