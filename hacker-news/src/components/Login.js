import { connect } from "react-redux";
import { login } from "../actions"

import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import MatrixParallax from "react-matrix-parallax";
import styled from "styled-components";

// import { Form, Icon, Input, Button, Checkbox, Card } from "antd";
// import "antd/dist/antd.css";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const URL = "https://bw-backend-hn.herokuapp.com/api/auth/login"

export const Login = (props) => {
	const [logFields, setLogFields] = useState({ username: "", password: ""});
	
	// const [isLogged, setIsLogged] = useState(false);

	// control form fields
	const doChange = e => {
		setLogFields({ ...logFields, [e.target.name]: e.target.value });
		clg(logFields);
	}

	// form submit
	const loginAction = e => {
		e.preventDefault();
		// axios call to get login creds from backend
		axios
			.post(URL, logFields)
			// .then(clg("loginAction >"))
			.then(res => {
				clg(res.data)
				sessionStorage.setItem("token", res.data.payload);
				clg(">>> Logged")
				
				/*
				WATCH FOR CHANGE
				*/
				props.history.push("/list");
			})
			.catch(err => clg(`!!! PROBLEM Login > axios :: ${err}`))
	}

	return (
		<div className="Login">
			<Form className="login-form">
				{/* <Form.Item> */}
					<input
						// prefix={<Icon type="user" style={{}} />}
						placeholder="Username"
						name="username" value={logFields.username} onChange={doChange}
					/>
				{/* </Form.Item> */}
				{/* <Form.Item> */}
					<input
						type="password"
						// prefix={<Icon type="key" style={{}} />}
						placeholder="Password"
						name="password" value={logFields.password} onChange={doChange}
					/>
				{/* </Form.Item> */}

				{/* <Form.Item> */}
					<Button onClick={loginAction} type="primary" size="large">
						Login!
          			</Button>
				{/* </Form.Item> */}
			</Form>
		</div>
	);
}

const mapStateToProps = state => ({
	error: state.error,
	login: state.login,
	inProgress: state.inProgress
})

const mapDispatchToProps = {login};

export default connect (mapStateToProps, mapDispatchToProps)(Login);
