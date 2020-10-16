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
  padding-top: 5%;
`

const DetailsDiv = styled.div`
  width: 40%;
  margin: 2% auto;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  padding: 2%;
  border-radius: 5px;
`

const DetailsTitle = styled.div`
  text-align: center;
  font-weight: bold;
`

const Details = styled.p`
  font-weight: bold;
`

const Span = styled.span`
  font-weight: normal;
` 

export default function Success(props) {
  const { formState } = props;
  return (
    <SuccessContainer>
      <Bg src="assets/karthik-garikapati-oBbTc1VoT-0-unsplash.jpg"></Bg>
      <TextCont>
        <Soon>Get ready!</Soon>
        <Soon>Your pizza will arrive shortly.</Soon>
        <DetailsDiv>
          <DetailsTitle>Your Order Details</DetailsTitle>
          <Details>Name: <Span>{formState.name}</Span></Details>
          <Details>Size: <Span>{formState.size}</Span></Details>
          <Details>Toppings: 
            {formState.toppings.map((topping, idx, arr) => {  
              if (idx === arr.length-1) {
                return <Span key={topping}></Span>
              }
              else {
                return <Span key={topping}> {topping},</Span>
              }
          })}
          </Details>
          <Details>Special Instructions: <Span>{formState.instructions}</Span></Details>
        </DetailsDiv>
       </TextCont>
    </SuccessContainer>
  )
}