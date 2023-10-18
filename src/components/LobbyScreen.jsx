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

function LobbyScreen({ onPollStart, roomCode, restaurants, users }) {
  const toast = useToast();

  function handleCopy() {
    navigator.clipboard.writeText(roomCode);
    toast({ title: "Code copied", status: "success", duration: 3000, isClosable: true });
  }

  return (
    <OuterContainer>
      <PageContainer>
        <Header>
          <Text as='b' fontSize='6xl' color="#2e8c86">cherrypick</Text>
          <Progress style={{ maxWidth: "350px" }} hasStripe value={0} width="80%" colorScheme="teal" />
        </Header>
        <Body>
          <Text style={{ display: "flex", flexDirection: "row", marginTop: "10px" }} as='b' fontSize='3xl' color="#2e8c86">room code:&nbsp;
            <p id="room-code">{roomCode}</p>
            <AiOutlineCopy onClick={handleCopy} size={40} />
          </Text>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Text style={{ display: "flex", flexDirection: "row", marginTop: "10px" }} as='b' fontSize='3xl' color="#2e8c86">
              <p>restaurants:</p>
            </Text>
            {restaurants?.map(res => <Text key={res.name}>{res.name}</Text>)}
          </div>
          <AvatarGroup size='md' max={1}>
            {users.map(user => <Avatar src='https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg' name={user} key={user} />)}
          </AvatarGroup>
          {/* TODO: add restaurants */}
          {/* TODO: add star slider */}
          {/* TODO: add price slider */}
          <Button colorScheme='teal' size='lg' onClick={onPollStart}>
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

export default LobbyScreen;