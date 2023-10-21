import React, { useEffect, useState } from 'react'
import PlaceService from './services/place';
import SelectionScreen from './SelectionScreen'
import StartScreen from './StartScreen'
import WinnerScreen from './WinnerScreen'
import LoadingScreen from './LoadingScreen'
import LobbyScreen from './LobbyScreen'
import RoomService from './services/rooms';

function BaseComponent() {
  const [displayState, setDisplayState] = useState(1);
  const [roomCode, setRoomCode] = useState(undefined);
  const [restaurants, setRestaurants] = useState(undefined);
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  async function getRestaurants() {
    let restaurantData = await PlaceService.getPlaces();
    setRestaurants(restaurantData.map(restaurantCleanser));
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  function reset() {
    setDisplayState(1);
    getRestaurants();
    setCounter(0);
  }

  function handleRoomCreate() {
    const roomCode = RoomService.getAvailableRoom();
    handleRoomJoin(roomCode);
  }

  function handleRoomJoin(room) {
    setRoomCode(room);
    setUsers(RoomService.getUsers());
    setDisplayState(2);
  }

  function handlePollStart() {
    setDisplayState(3);
  }

  function handleSelect(option) {
    const updatedRestaurants = [...restaurants, option == 1? restaurants[0] : restaurants[2]]
    updatedRestaurants.splice(0, 2);
    setRestaurants(updatedRestaurants);
    setCounter(ex => ex + 1);
    setDisplayState(4);
    setTimeout(() => {
      if (updatedRestaurants.length != 1) {
        setDisplayState(3);
      } else {
        setDisplayState(5);
      }
    }, 1200);
  }

  function restaurantCleanser(restaurant) {
    return {
      location: restaurant.formatted_address,
      name: restaurant.name,
      priceLevel: restaurant.price_level,
      stars: restaurant.rating,
      numReviews: restaurant.user_ratings_total,
      wheelchair: restaurant.wheelchair_accessible_entrance,
      vegan: restaurant.serves_vegetarian_food,
      imageURL: restaurant.imageURL
    };
  }
  switch (displayState) {
    case 1:
      return <StartScreen onRoomCreate={handleRoomCreate} onRoomJoin={handleRoomJoin} />;
    case 2:
      return <LobbyScreen onPollStart={handlePollStart} roomCode={roomCode} users={users} restaurants={restaurants} />;
    case 3:
      return <SelectionScreen restaurant1={restaurants[0]} restaurant2={restaurants[1]} onSelect={handleSelect} counter={counter} />;
    case 4:
      return <LoadingScreen />;
    case 5:
      return <WinnerScreen restaurant={restaurants[0]} reset={reset}/>;
    default:
      return <div>Stage Not Found</div>;
  }
}

export default BaseComponent;