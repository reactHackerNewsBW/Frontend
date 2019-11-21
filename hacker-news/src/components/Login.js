<<<<<<< HEAD
/* Author: jffrydsr 
   Date: 11/22/2019
   Copyright: Hacker News Clone ©, 2019
*/
<<<<<<< HEAD
=======

>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
import React from "react";
import { useState, useEffect } from 'react';
import { Card, Form, Label, Input, FormGroup } from 'react-bootstrap';

export default function Login() {

  const [isSignin, setIsSignin] = useState({
    username: "",
    password: "",
  });

  const submitForm = (event) => {
    do {
      event.preventDefault();
    }
  };

  return (
<<<<<<< HEAD
    <Card className="LoginPage">
=======
    <Card>
>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
      <Form>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
<<<<<<< HEAD
          <Input type="email" name="email" id="login_email" placeholder="what's your email? :information_desk_person::skin-tone-6:‍" />
=======
          <Input type="email" name="email" id="login_email" placeholder="what's your email? 💁🏿‍" />
>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
<<<<<<< HEAD
          <Input type="password" name="password" id="login_password" placeholder="what's your password? :key:" />
=======
          <Input type="password" name="password" id="login_password" placeholder="what's your password? 🔑" />
>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Remember this device?</legend>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="login_remember" />{' '}
              Yes
          </Label>

            <Label check>
              <Input type="radio" name="login_remember" />{' '}
              Yes
          </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
<<<<<<< HEAD
          <Button class="submitButton">Sign In</Button>
=======
          <Button>Sign In</Button>
>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
        </FormGroup>
      </Form>
    </Card>
  )
};
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "../actions"

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
	const loginAction = incoming => {
		// e.preventDefault();
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
		<Card className="Login">
			<Form className="login-form">
				<Form.Item>
					<Input
						prefix={<Icon type="user" style={{}} />}
						placeholder="Username"
						name="username" value={logFields.username} onChange={doChange}
					/>
				</Form.Item>
				<Form.Item>
					<Input
						type="password"
						prefix={<Icon type="key" style={{}} />}
						placeholder="Password"
						name="password" value={logFields.password} onChange={doChange}
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

const mapStateToProps = state => ({
	error: state.error,
	login: state.login,
	inProgress: state.inProgress
})

const mapDispatchToProps = {login};

export default connect (mapStateToProps, mapDispatchToProps)(Login);
>>>>>>> 01dfa7c21017a694b16b8c8f47853e4e81b64e20
