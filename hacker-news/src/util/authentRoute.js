import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} render={props => {
			if (sessionStorage.getItem("token")) {
				return <Component {...props} />
			}
			return <Redirect to="/login" />
		}}
	)
}