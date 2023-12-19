import React from 'react';
import background from "../assets/login1.jpg";
import styled from "styled-components";


export default function BackgroundImage() {
  return (
    <Container>
        <img src={background} alt="background" />
        
    </Container>
  );
}


const Container = styled.div`
    height: 100vh;
    widht: 100vw;
    img{
        height: 100vh;
        widht: 1000vw;
    }
`;
