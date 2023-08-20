import React, { useEffect, useState } from 'react'
import SelectionScreen from './SelectionScreen'
import StartScreen from './StartScreen'
import WinnerScreen from './WinnerScreen'
import LoadingScreen from './LoadingScreen'
import LobbyScreen from './LobbyScreen'
import sampleInput from './sampleinput'

function BaseComponent({ }) {
  const [displayState, setDisplayState] = useState(1);
  const [roomCode, setRoomCode] = useState(undefined);
  const [formattedRestaurants, setFormattedRestaurants] = useState(undefined);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (sampleInput) {
      let formatted = [];
      sampleInput.forEach((restaurant) => {
        const newRestaurant = restaurantCleanser(restaurant);
        formatted.push(newRestaurant);
      });
      // @@@@@@@@ MODIFY THIS @@@@@@@@@@
      formatted = shuffleArray([...formatted]);
      const maxNum = 8;
      const selection = formatted.slice(0, maxNum);
      setFormattedRestaurants(selection);
    }
  }, [sampleInput]);

  const reset = () => {
    // RESET RESTAURANTS
    sampleInput.forEach((restaurant) => {
      const newRestaurant = restaurantCleanser(restaurant);
      formattedRestaurants.push(newRestaurant);
    });
    // @@@@@@@@ MODIFY THIS @@@@@@@@@@
    const maxNum = 8;
    const selection = formattedRestaurants.slice(0, maxNum);
    setFormattedRestaurants(selection);

    // RESET COUNTER
    setCounter(0);
  }
  
  // option is either 1 or 2
  const handleSelection = (option) => {
    const newArray = formattedRestaurants;
    let option1 = newArray.shift();
    let option2 = newArray.shift();
    if (option === 1) {
      // option 1
      newArray.push(option1);
    } else {
      // option 2
      newArray.push(option2);
    }
  }

  const restaurantCleanser = (r) => {
    // takes in scuffed restaurant object, returns a cleaned one that doesn't have unnecessary stuff in it
    const newObject = {};
    newObject.location = r.formatted_address;
    newObject.name = r.name;
    newObject.priceLevel = r.price_level;
    newObject.stars = r.rating;
    newObject.numReviews = r.user_ratings_total;
    // wheelchair accessible
    newObject.wheelchair = r.wheelchair_accessible_entrance;
    // vegan
    newObject.vegan = r.serves_vegetarian_food;
    // imageURL
    newObject.imageURL = r.imageURL;
    return newObject;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // const socket = io("http://localhost:3000");

  // socket.on("connect", () => {
  //   console.log("You connected with id: ${socket.id}")
  // })

  if (displayState && displayState == "1") {
    return (
      <>
        <StartScreen setDisplayState={setDisplayState} setRoomCode={setRoomCode} />
      </>
    )
  } else if (displayState && displayState == "2") {
    return (
      <>
        <LobbyScreen setDisplayState={setDisplayState} roomCode={roomCode} formattedRestaurants={formattedRestaurants} />
      </>
    )
  } else if (displayState && displayState == "3") {
    return (
      <>
        <SelectionScreen setDisplayState={setDisplayState} formattedRestaurants={formattedRestaurants} handleSelection={handleSelection} counter={counter} setCounter={setCounter}/>
      </>
    )
  } else if (displayState && displayState == "4") {
    return (
      <>
        <LoadingScreen setDisplayState={setDisplayState} formattedRestaurants={formattedRestaurants} />
      </>
    )
  } else if (displayState && displayState == "5") {
    return (
      <>
        <WinnerScreen formattedRestaurants={formattedRestaurants} setDisplayState={setDisplayState} reset={reset}/>
      </>
    )
  } else {
    return (
      <div>bruh</div>
    )
  }
}



export default BaseComponent