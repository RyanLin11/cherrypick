import React from 'react'
import styled from "styled-components";
import { Text, Button, Input} from '@chakra-ui/react'

function StartScreen() {
  return (
    <>
        <PageContainer>
            <LogoSpace>
              <Text as='b' fontSize='6xl' color="#2e8c86">cherrypick</Text>
            </LogoSpace>

            <CreateOptionSpace>
              <Button bg='#2e8c86' color='white'>Create</Button>
            </CreateOptionSpace>
            
            <JoinOptionSpace>
              <div style={{marginBottom: "3%"}}>
                <Input placeholder='Room PIN' size='md' borderColor='#2e8c86' textAlign="center"/>
              </div>
              <Button bg='#2e8c86' color='white'>Join</Button>
            </JoinOptionSpace>
                
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
  padding-top: 50%;
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