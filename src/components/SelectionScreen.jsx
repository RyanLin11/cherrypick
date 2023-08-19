import React from 'react'
import styled from "styled-components";
import { Text, Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Carousel from './CarouselComponent';
import StepperComponent from './StepperComponent';

function SelectionScreen() {
  return (
    <>
      <PageContainer>
        <Text as='b' fontSize='6xl' color="#3F9795">cherrypick</Text>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Living room Sofa</Heading>
              <Text>
                This sofa is perfect.
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' backgroundColor="#3F9795" color="white">
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        {/* <Carousel /> */}
      </PageContainer>
    </>
  )
}


const StyledButton = styled.button`
      background-color: black;
      font-size: 32px;
      color: white;
      `;

const Paragraph = styled.p`
      font-family: Roboto;
      `

const PageContainer = styled.div`
  color: "black";
`



export default SelectionScreen