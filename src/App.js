import React from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"
import Home from "./components/Home";
import Form from "./components/Form";
import Success from "./components/Success";
import styled from "styled-components";
import "./App.css";

const Header = styled.header`
  background-color: ${props => props.theme.red};
  display: flex;
`
const Title = styled.h1`
  margin: auto 23%;
  font-size: 4rem;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 1% 0 1% 1%;
  line-height: 3rem;
`

const App = (props) => {
  return (
    <Router>
      <Header>
        <Nav>
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="/pizza">Order Pizza</NavLink>
        </Nav>
        <Title>Pizza Pizza</Title>
      </Header>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <Form />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Router>
  );
};
export default App;
