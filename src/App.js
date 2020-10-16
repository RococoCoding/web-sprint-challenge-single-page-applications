import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from "./components/Home";
import Form from "./components/Form";
import Success from "./components/Success";

const App = () => {
  return (
    <Router>
      <nav>
        <h1>Pizza Pizza</h1>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/success">Success</Link>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Router>
  );
};
export default App;
