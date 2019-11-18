import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from "react-router-dom";
// import Login from "./components/Login"

import Login from "./components/tempLog";
import Register from "./components/tempReg";
import List from "./components/tempList";
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<p><Link to="/login">Login to existing</Link></p>
				<p><Link to="/register">Register new</Link></p>
			</div>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/list" component={List} />
			{/* <Route render={() => { return 404 }} /> */}
		</Router>
	);
}

export default App;
