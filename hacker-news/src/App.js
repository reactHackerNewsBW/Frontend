import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/tempLog";
import List from "./components/List";
import AddEdit from "./components/AddEdit"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function clg(...x) {
	for (let exes of x) console.log(exes);
}

function App(props) {
	clg();
	return (
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
						<AddEdit {...props}/>
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
  );
}

export default App;
