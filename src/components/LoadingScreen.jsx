import React from 'react'
import styled from "styled-components";
import { Spinner, Text } from '@chakra-ui/react'

function LoadingScreen() {
  return (
    <>
        <PageContainer>
            <LoadingWheelSpace>
                <Spinner color='#2e8c86' size='xl'/>
            </LoadingWheelSpace>

            <VotedSpace>
                <Text as='b' fontSize='lg' color="#2e8c86">2/5 Finished Voting</Text>
            </VotedSpace>
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
  background-color: white;
  padding-top: 75%;
`;

const LoadingWheelSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 15%;
`;

const VotedSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export default LoadingScreen