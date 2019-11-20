import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from "./reducers"
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)))

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
	, document.getElementById('root')

);
