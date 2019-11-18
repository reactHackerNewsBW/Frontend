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
import './App.css';

function App() {
	return (
		
		<Router>
			<div className="App">
				<header className="App-header">
					<p><Link to="/login">Login to existing</Link></p>
					<p><Link to="/register">Register new</Link></p>
				</header>
			</div>
			<Switch>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route render ={() => {return 404}} />
			</Switch>
		</Router>
	);
}

export default App;
