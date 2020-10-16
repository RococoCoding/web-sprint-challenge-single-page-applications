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
  padding: 2%;

`
const Title = styled.h1`
  margin: auto 30%;
`

const Nav = styled.nav`
  padding: 1% 0;
`

const App = (props) => {
  return (
    <Router>
      <Header>
        <Nav>
          <NavLink className="navlink" to="/">Home | </NavLink>
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
