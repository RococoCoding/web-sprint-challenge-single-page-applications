import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  
`
const Img = styled.img`
  width: 100%;
  opacity: 50%;
`

const OverText = styled.p`
  
`
const Button = styled.button`

`
export default function Home(props) {
  return (
    <HomeContainer>
      <Img src="assets/Pizza.jpg"/>
      <OverText>Your favorite pizza delivered</OverText>
      <Button>Order Now</Button>
    </HomeContainer>
  )
}