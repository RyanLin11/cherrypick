import React from 'react'
import styled from "styled-components";
import { Text, Button, Input } from '@chakra-ui/react'

function StartScreen({ setDisplayState, setRoomCode }) {

  const generateRandomPIN = () => {
    const min = 1000; // Minimum value (inclusive)
    const max = 9999; // Maximum value (inclusive)
    const randomPIN = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomPIN;
  };

  const myURL = "https://localhost:3000";

  const postRoomCode = async (code) => {
    const response = await fetch(myURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        code: code,
      }
    });
    // now that we have response..........
  };

  const onCreate = async () => {
    const code = generateRandomPIN();
    setRoomCode(code);
    // const electionObject = await postRoomCode(code);
    // .... more stuff from electionObject
    setDisplayState(2);
  }



  return (
    <>
        <PageContainer style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
            <PageContainer style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
              <LogoSpace>
                <Text as='b' fontSize='6xl' color="#2e8c86">cherrypick</Text>
              </LogoSpace>

              <CreateOptionSpace style={{marginTop: "5%"}}>
                <Button style={{ width: "320px"}}onClick={onCreate} bg='#2e8c86' color='white'>Create</Button>
              </CreateOptionSpace>
              
              <JoinOptionSpace>
                <div style={{marginBottom: "3%"}}>
                  <Input type="number" placeholder='Room PIN' size='md' borderColor='#2e8c86' textAlign="center"/>
                </div>
                <Button style={{ width: "320px" }} onClick={() => setDisplayState(2)} bg='#2e8c86' color='white'>Join</Button>
              </JoinOptionSpace>
            </PageContainer>
        </PageContainer>
    </>
  )
}

const PageContainer = styled.div`
  height: 100vh;
  max-width: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items:center;
  background-color: white;
`;

const LogoSpace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CreateOptionSpace = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  background-color: white;
  border-radius: 10px; 
  background-color: #f0f0f0;
  margin-bottom: 5%;
  margin-top: 13%;
`;

const JoinOptionSpace = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  background-color: white;
  border-radius: 10px;
  background-color: #f0f0f0;
`;


export default StartScreen