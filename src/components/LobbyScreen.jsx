import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Carousel from './CarouselComponent';
import StepperComponent from './StepperComponent';
import ProgressComponent from './ProgressComponent';

// Chakra UI
import { Text, Image, Stack, Heading, Divider, ButtonGroup, Button, useToast } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Progress, Box, Badge } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

// Icons
import { StarIcon } from '@chakra-ui/icons'
import { PiPlantLight, PiWheelchairLight, PiPlantFill, PiWheelchairFill } from 'react-icons/pi'
import { AiOutlineCopy } from 'react-icons/ai';

// Sample Input
import sampleInput from './sampleinput';

function LobbyScreen({ setDisplayState, roomCode }) {
  const [users, setUsers] = useState(["Frank", "Ryan", "Edward", "Vanness"]);
  const [restaurants, setRestaurants] = useState(undefined);
  const [formattedRestaurants, setFormattedRestaurants] = useState(undefined);
  const [formatDone, setFormatDone] = useState(false);

  useEffect(() => {
    if (sampleInput) {
      let formattedRestaurants = [];
      sampleInput.forEach((restaurant) => {
        const newRestaurant = restaurantCleanser(restaurant);
        formattedRestaurants.push(newRestaurant);
      });
      // @@@@@@@@ MODIFY THIS @@@@@@@@@@
      const maxNum = 8;
      const selection = formattedRestaurants.slice(0, maxNum);
      setFormattedRestaurants(selection);
    }
  }, [sampleInput]);

  useEffect(() => {
    if (formattedRestaurants) {
      setFormatDone(true);
      console.log('FORMATTED RESTAURANTS: ', formattedRestaurants);
    }
  }, [formattedRestaurants])

  const restaurantCleanser = (r) => {
    // takes in scuffed restaurant object, returns a cleaned one that doesn't have unnecessary stuff in it
    const newObject = {};
    newObject.location = r.formatted_address;
    newObject.name = r.name;
    newObject.priceLevel = r.price_level;
    newObject.stars = r.rating;
    newObject.numReviews = r.user_ratings_total;
    // wheelchair accessible
    // vegan
    return newObject;
  }

  const copyFunction = () => {
    let copyText = document.getElementById("room-code");
    let text = copyText.innerText;
    navigator.clipboard.writeText(text);
  }

  const toast = useToast();

  return (
    <OuterContainer>
      <PageContainer>
        <Header>
          <Text as='b' fontSize='6xl' color="#2e8c86">cherrypick</Text>
          <Progress style={{ maxWidth: "350px" }} hasStripe value={0} width="80%" colorScheme="teal" />
        </Header>
        <Body>
          {/* room code */}
          <Text style={{ display: "flex", flexDirection: "row", marginTop: "10px" }} as='b' fontSize='3xl' color="#2e8c86">room code:&nbsp;
            <p id="room-code">{roomCode}</p>
            <AiOutlineCopy onClick={() => {copyFunction(); toast({title: "Code copied", status: "success", duration: 3000, isClosable: true})}} size={40} />
          </Text>
          {/* <Image src='https://media.tenor.com/bt4lr9-ANSEAAAAd/samurai-monkey.gif' /> */}
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Text style={{ display: "flex", flexDirection: "row", marginTop: "10px" }} as='b' fontSize='3xl' color="#2e8c86">
              <p>restaurants:</p>
            </Text>
            {formatDone && formattedRestaurants.map((res) => <Text key={res.name}>{res.name}</Text>)}
          </div>
          {/* bozos */}
          <AvatarGroup size='md' max={1}>
            {users.map((user) => (<Avatar src='https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg' name={user} key={user} />))}
          </AvatarGroup>
          {/* restaurants */}
          {/* star slider */}
          {/* price slider */}

          {/* Button */}
          <Button colorScheme='teal' size='lg' onClick={() => setDisplayState(3)}>
            START!
          </Button>


        </Body>


        {/* <Carousel /> */}
      </PageContainer>
    </OuterContainer>
  )
}

const Header = styled.section`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Body = styled.section`
  width: 90%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Paragraph = styled.p`
      font-family: Roboto;
      `

// literally outmost thing - contains whole page
const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
`

const PageContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`

export default LobbyScreen