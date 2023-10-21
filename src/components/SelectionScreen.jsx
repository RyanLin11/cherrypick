import styled from "styled-components";
import Carousel from './CarouselComponent';
import StepperComponent from './StepperComponent';
import ProgressComponent from './ProgressComponent';
import { maxNum } from "./services/place";

// Chakra UI
import { Text, Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Progress, Box, Badge } from '@chakra-ui/react'

// Icons
import { StarIcon } from '@chakra-ui/icons'
import { PiPlantLight, PiWheelchairLight, PiPlantFill, PiWheelchairFill } from 'react-icons/pi'

function SelectionScreen({ restaurant1, restaurant2, onSelect, counter }) {
  return (
    <OuterContainer>
      <PageContainer>
        <Header>
          <Text as='b' fontSize='6xl' color="#2e8c86">cherrypick</Text>
          <Progress style={{ maxWidth: "350px" }} hasStripe value={counter / (maxNum - 1) * 100} width="80%" colorScheme="teal" />
        </Header>
        <Body>

          {/* Restaurant1 */}
          <Box style={{ width: "380px", marginTop: "10px" }} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image style={{ width: "100%", height: "130px", objectFit: "cover" }} src={restaurant1.imageURL} />

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
                  {restaurant1 && "$".repeat(restaurant1.priceLevel)}&nbsp;&nbsp;&nbsp;&nbsp;
                </Box>
                <IconsContainer style={{ marginTop: "10px" }}>
                  {restaurant1.vegan && <PiPlantFill size={20} color="teal" />}
                  &nbsp;
                  {restaurant1.wheelchair && <PiWheelchairFill size={20} color="teal" />}
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
                {restaurant1.location.substring(0, restaurant1.location.indexOf(','))}
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
            <Image style={{ width: "100%", height: "130px", objectFit: "cover" }} src={restaurant2.imageURL} />

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
                  {restaurant2 && "$".repeat(restaurant2.priceLevel)}&nbsp;&nbsp;&nbsp;&nbsp;
                </Box>
                <IconsContainer style={{ marginTop: "10px" }}>
                  {restaurant2.vegan && <PiPlantFill size={20} color="teal" />}
                  &nbsp;
                  {restaurant2.wheelchair && <PiWheelchairFill size={20} color="teal" />}
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
                {restaurant2.location.substring(0, restaurant2.location.indexOf(','))}
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
                <Button onClick={() => onSelect(1)} variant='solid' backgroundColor="#2e8c86" color="white">
                  Option 1
                </Button>
                <Button onClick={() => onSelect(2)} variant='solid' backgroundColor="#2e8c86" color="white">
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

export default SelectionScreen;