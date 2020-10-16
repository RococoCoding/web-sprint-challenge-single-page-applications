import React from "react";
import styled from "styled-components";

const SuccessContainer = styled.div`
`
const Bg = styled.img`
  width: 100%;
  opacity: 60%;
  z-index: -1;
  position: fixed;
`
const Soon = styled.p`
  font-size: 4rem;
  margin: 0;
  text-align: center;
  font-weight: bold;
`

const TextCont = styled.div`
  padding-top: 20%;
`

export default function Success(props) {
  return (
    <SuccessContainer>
      <Bg src="assets/karthik-garikapati-oBbTc1VoT-0-unsplash.jpg"></Bg>
      <TextCont>
        <Soon>Get ready!</Soon>
        <Soon>Your pizza will arrive shortly.</Soon>
      </TextCont>
    </SuccessContainer>
  )
}