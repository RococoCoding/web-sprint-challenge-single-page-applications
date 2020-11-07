import React from "react";
import styled from "styled-components";
import "./Home.css";
import {Link} from "react-router-dom"

const HomeContainer = styled.div`
`
const Img = styled.img`
  width: 100%;
  opacity: 70%;
  position: fixed;
  z-index: -1;
`

const OverText = styled.p`
  margin: 0;
  padding: 10% 0;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
`

export default function Home(props) {
  return (
    <HomeContainer>
      <Img src="assets/Pizza.jpg"/>
      <OverText>Your favorite pizza delivered</OverText>
      <Link className="button" to="/pizza">Order Now</Link>
    </HomeContainer>
  )
}