import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Icon, Input, Button, Checkbox, Card } from "antd";
import "antd/dist/antd.css";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const URL = "https://bw-backend-hn.herokuapp.com/api/auth/login"

export const Login = (props) => {
	const [cred, setCred] = useState({ username: "", password: ""});
	const [isLogged, setIsLogged] = useState(false);

	// control form fields
	const doChange = e => {
		setCred({ ...cred, [e.target.name]: e.target.value });
		clg(cred);
	}

	// form submit
	const loginAction = e => {
		// e.preventDefault();
		// axios call to get login creds from backend
		axios
			.post(URL, cred)
			.then(clg("loginAction >"))
			.then(res => {
				clg(res.data)
				sessionStorage.setItem("token", res.data.payload);
				setIsLogged(true)
				clg(">>> Logged")

				/*
				WATCH FOR CHANGE
				*/
				// props.history.push("list");
			})
			.catch(err => clg(`!!! PROBLEM -- Login > axios :: ${err}`))
	}

	useEffect(() => {
		if (isLogged) {
			/* 
			CHECK
			if logged in, bypass LOGIN page, directly to list
		
			<Redirect /> from react in the return()
			*/
		} else {
			sessionStorage.getItem("token") ? setIsLogged(true) : setIsLogged(false);
		}
	}, [])

	return (
		<Card className="Login">
			<Form className="login-form">
				<Form.Item>
					<Input
						prefix={<Icon type="user" style={{}} />}
						placeholder="Username"
						name="username" value={cred.username} onChange={doChange}
					/>
				</Form.Item>
				<Form.Item>
					<Input
						type="password"
						prefix={<Icon type="key" style={{}} />}
						placeholder="Password"
						name="password" value={cred.password} onChange={doChange}
					/>
				</Form.Item>

				<Form.Item>
					<Button onClick={loginAction} type="primary" size="large">
						Login!
          			</Button>
				</Form.Item>
			</Form>
		</Card>
	);
}

export default Login;