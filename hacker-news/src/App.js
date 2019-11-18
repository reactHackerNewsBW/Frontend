import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from "react-router-dom";
// import Login from "./components/Login"

import Login from "./components/tempLog";
import './App.css';

function App() {
	return (
		
		<p><Login /></p>
		// <Router>
		// 	<div className="App">
		// 		<header className="App-header">
		// 			<p><Link to="/login">LOGIN</Link></p>
		// 		</header>
		// 	</div>
		// 	<Route path="/login" component={Login} />
		// </Router>
	);
}

export default App;
