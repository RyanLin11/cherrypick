import React from 'react'
import styled from "styled-components";
import Carousel from './CarouselComponent';
import StepperComponent from './StepperComponent';
import ProgressComponent from './ProgressComponent';

// Chakra UI
import { Text, Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Progress, Box, Badge } from '@chakra-ui/react'

// Icons
import { StarIcon } from '@chakra-ui/icons'
import { PiPlantLight, PiWheelchairLight, PiPlantFill, PiWheelchairFill } from 'react-icons/pi'

function SelectionScreen() {
  const restaurant1 = {
    imageUrl: 'https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/4f0203ac-a61f-4d0b-8edc-479b6407aa2b.jpg',
    name: 'Lazeez Shawarma',
    location: "170 University Ave W",
    // # of $'s
    priceLevel: 4,
    numReviews: 150,
    stars: 5,
    // accessibility
    wheelchair: true,
    vegan: true,
  }

  const restaurant2 = {
    imageUrl: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/7e81b047-95ea-47a3-9afb-da5a4054cb77.jpg',
    name: 'Campus Pizza',
    location: "160 University Ave W",
    // # of $'s
    priceLevel: 1,
    numReviews: 10000,
    stars: 2,
    // accessibility
    wheelchair: false,
    vegan: true,
  }

  // Process what to show for $'s
  const dollarSigns1 = [];
  for (let i = 0; i < restaurant1.priceLevel; i++) {
    dollarSigns1.push(<span key={i}>$</span>);
  }

  const dollarSigns2 = [];
  for (let i = 0; i < restaurant2.priceLevel; i++) {
    dollarSigns2.push(<span key={i}>$</span>);
  }

  return (
    <OuterContainer>
      <PageContainer>
        <Header>
          <Text as='b' fontSize='6xl' color="#2e8c86">cherrypick</Text>
          <Progress style={{ maxWidth: "350px" }} hasStripe value={64} width="80%" colorScheme="teal" />
        </Header>
        <Body>

          {/* Restaurant1 */}
          <Box style={{ width: "380px", marginTop: "10px" }} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image style={{ width: "100%", height: "130px", objectFit: "cover" }} src={restaurant1.imageUrl} />

            <Box p='6'>
              <Box style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }} display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  Option 1
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {dollarSigns1}&nbsp;&nbsp;&nbsp;&nbsp;
                </Box>
                <IconsContainer style={{ marginTop: "10px" }}>
                  {restaurant1.vegan ? <PiPlantFill size={20} color="teal" /> : <></>}
                  &nbsp;
                  {restaurant1.wheelchair ? <PiWheelchairFill size={20} color="teal" /> : <></>}
                  &nbsp;
                </IconsContainer>
              </Box>

              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {restaurant1.name}
              </Box>

              <Box>
                {restaurant1.location}
              </Box>

              <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < restaurant1.stars ? 'teal.500' : 'gray.300'}
                    />
                  ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {restaurant1.numReviews} reviews
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Restaurant2 */}
          <Box style={{ width: "380px", marginTop: "10px" }} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image style={{ width: "100%", height: "130px", objectFit: "cover" }} src={restaurant2.imageUrl} />

            <Box p='6'>
              <Box style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }} display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  Option 2
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {dollarSigns2}&nbsp;&nbsp;&nbsp;&nbsp;
                </Box>
                <IconsContainer style={{ marginTop: "10px" }}>
                  {restaurant2.vegan ? <PiPlantFill size={20} color="teal" /> : <></>}
                  &nbsp;
                  {restaurant2.wheelchair ? <PiWheelchairFill size={20} color="teal" /> : <></>}
                  &nbsp;
                </IconsContainer>
              </Box>

              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {restaurant2.name}
              </Box>

              <Box>
                {restaurant2.location}
              </Box>

              <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < restaurant2.stars ? 'teal.500' : 'gray.300'}
                    />
                  ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {restaurant2.numReviews} reviews
                </Box>
              </Box>
            </Box>
          </Box>

          <Card style={{ marginTop: "20px", marginBottom: "10px" }}>
            <CardFooter style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <ButtonGroup spacing='2'>
                <Button onClick={() => console.log('option1 selected')} variant='solid' backgroundColor="#2e8c86" color="white">
                  Option 1
                </Button>
                <Button onClick={() => console.log('option2 selected')} variant='solid' backgroundColor="#2e8c86" color="white">
                  Option 2
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
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
  justify-content: center;
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

export default SelectionScreen