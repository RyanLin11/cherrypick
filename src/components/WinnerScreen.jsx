import React from 'react'
import styled from "styled-components";
import {Text, Box, Image, Badge} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { PiPlantLight, PiWheelchairLight, PiPlantFill, PiWheelchairFill } from 'react-icons/pi'

function WinnerScreen() {

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

    const dollarSigns1 = [];
    for (let i = 0; i < restaurant1.priceLevel; i++) {
        dollarSigns1.push(<span key={i}>$</span>);
    }
    
    return (
        <PageContainer>
            <WinnerTextSpace>
                <Text as='b' fontSize='6xl' color="#3F9795">WINNER</Text>
            </WinnerTextSpace>

            <TrophySpace>
                <Image width='200px' height='300px' src='https://static.vecteezy.com/system/resources/previews/009/315/016/original/winner-trophy-in-flat-style-free-png.png' alt='Trophy' />
            </TrophySpace>

            <RestaurantSpace>
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
            </RestaurantSpace>
            
        </PageContainer>
    )
}

const PageContainer = styled.div`
    height: 100vh;
    max-width: 100%;
    padding: 10%;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const WinnerTextSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10%;
`;

const TrophySpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10%;
`;

const RestaurantSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export default WinnerScreen