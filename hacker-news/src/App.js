import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/tempLog";
import List from "./components/List";
// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
	return (
		<div className="App">
			<Router>
				<div className="App">
					<p><Link to="/login">Login to existing</Link></p>
					<p><Link to="/register">Register new</Link></p>
					<p><Link to="/list">List</Link></p>
				</div>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/list" component={List} />
				{/* <Route render={() => { return 404 }} /> */}
			</Router>
			{/* <Register /> */}
		</div>
=======
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from "./components/Register";
=======
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import { Register } from "./components/Register";
>>>>>>> cf0dc7a52bbc617437111ffb5ddc1c43f2453025
import Login from "./components/tempLog";
import List from "./components/List";
import AddEdit from "./components/AddEdit"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Test } from "./components/test";
import MatrixParallax from "react-matrix-parallax";

<<<<<<< HEAD

function clg(...x) {
	for (let exes of x) console.log(exes);
}

function App(props) {
	clg();
	return (
		<>
			<div className="App">
				<Router>
					<div className="App">
						<p>
							<Link to="/login">Login to existing</Link>
						</p>
						<p>
							<Link to="/register">Register new</Link>
						</p>
						<p>
							<Link to="/list">List</Link>
						</p>
						<p>
							<Link to="/add">Add</Link>
						</p>
					</div>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/list" component={List} />
					<Route path="/add" component={AddEdit} />
					<Route path="/edit/:id"
						render={props => (
							<AddEdit {...props} />
						)}
					/>
					<Route path="/test" component={Test} />

					{/* <Route render={() => { return 404 }} /> */}
				</Router>
				{/* <Register /> */}
				<React.Fragment>
					<MatrixParallax
						color="rgba(122, 229, 114, 0.87)"
						backgroundColor="rgba(0,0,0,1)"
					>
						<h2>HACKER NEWS</h2>
						<h5 style={{ maxWidth: "100vw" }}></h5>
					</MatrixParallax>
				</React.Fragment>
			</div>
			<Test />
		</>
>>>>>>> 01dfa7c21017a694b16b8c8f47853e4e81b64e20
	);
=======
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
              <NavLink to="/list">List</NavLink>
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
            <h5 style={{ maxWidth: "100vw" }}></h5>
          </MatrixParallax>
        </React.Fragment>
      </div>
      <Test />
    </>
  );
>>>>>>> cf0dc7a52bbc617437111ffb5ddc1c43f2453025
}

