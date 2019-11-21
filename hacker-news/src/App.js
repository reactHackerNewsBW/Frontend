import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import List from "./components/List";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Test } from "./components/test";
import MatrixParallax from "react-matrix-parallax";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div className="App-links">
            <p>
              <NavLink to="/login">Login </NavLink>
            </p>
            <p>
              <NavLink to="/register">Register </NavLink>
            </p>
            <p>
              <NavLink to="/list">Articles</NavLink>
            </p>
          </div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/list" component={List} />
          <Route path="/test" component={Test} />

          {/* <Route render={() => { return 404 }} /> */}
        </Router>
        {/* <Register /> */}
        <React.Fragment>
          <MatrixParallax
            color="rgba(122, 229, 114, 0.87)"
            backgroundColor="rgba(0,0,0,1)"
          >
            <h2 className="title">HACKER NEWS</h2>
            <h5 style={{ maxWidth: "100vw" }} />
          </MatrixParallax>
        </React.Fragment>
      </div>
      <Test />
    </>
  );
}

export default App;
