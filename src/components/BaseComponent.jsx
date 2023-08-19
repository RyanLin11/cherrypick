import React, { useState } from 'react'
import SelectionScreen from './SelectionScreen'

function BaseComponent({ }) {
  const [displayState, setDisplayState] = useState(1);
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
  } else {
    return (
      <div>bruh</div>
    )
  }
}



export default BaseComponent