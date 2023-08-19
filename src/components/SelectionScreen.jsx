import React from 'react'
import styled from "styled-components";


function SelectionScreen() {
    return (
        <>
            <div>SelectionScreen</div>
            <StyledButton type="button">Click Me!</StyledButton>
        </>
    )
}

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
`;




export default SelectionScreen