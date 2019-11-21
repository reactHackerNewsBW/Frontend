import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom";

const isAuthent = () => {
	return sessionStorage.getItem("token") ? true : false;
}

const PrivateRoute = ({ children, ...rest }) => {
	return (
		<Route {...rest} render={({location}) => 
			isAuthent()
			? (children)
			: (<Redirect to={{pathname: "/login", state:{from:location}}}/>)

			// if (sessionStorage.getItem("token")) {
			// 	return <Component {...props} />
			// }
			// return <Redirect to="/login" />
		}/>
	)
}

export default PrivateRoute;