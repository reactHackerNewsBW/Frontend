import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import MatrixParallax from "react-matrix-parallax";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navigation />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/list" component={List} />
          {/* <Route path="/" component={Footer}/> */}

          {/* <Route render={() => { return 404 }} /> */}
        </Router>
        <Footer />
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

    </>
  );
}

export default App;
