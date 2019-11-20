import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { register } from "../actions"

import styled from "styled-components";


function clg(...exes) {
	for (let x of exes) console.log(x);
}

const URL = "https://bw-backend-hn.herokuapp.com/api/auth/register"

const Register = (props) => {
	const [regFields, setRegFields] = useState({ username: "", password: "", email: "" });

	const { register } = props;

	const Container = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 700px;
		padding-top: 22%;
	`;
	const DivForForm = styled.div`
		display: flex;
		flex-direction: column;
		width: 500px;
		margin: 0 auto;
		align-items: center;
		justify-content: center;
	`;

	// control form fields
	const doChange = e => {
		setRegFields({ ...regFields, [e.target.name]: e.target.value });
		clg(regFields);
	}

	// form submit
	const registerAction = incoming => {
		// e.preventDefault();
		// axios call to get register from backend
		clg("regfields", regFields)
		axios

			/*	
				  WATCH FOR CHANGE
				  */
			.post(URL, { username: incoming.username, password: incoming.password })
			.then(res => {
				clg("--- Registered ++")
				clg(res)

				/*
				WATCH FOR CHANGE
				*/
				props.history.push("/login");
			})
			.catch(err => clg(`>>> PROBLEM Register > axios :: ${err}`))
	}

	return (
		<div className="Container">
			<p style={{ fontWeight: "bold" }}>Register</p>
			<br />
			<Form
				onSubmit={registerAction}
				style={{
					border: "5px solid green",
					padding: "40px",
					borderRadius: "25px",
					boxShadow: "5px 8px black"
				}}
			>
				<Form.Group controlId="formBasicUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter username"
						name="username"
						value={register.username}
						onChange={doChange}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						value={register.email}
						onChange={doChange}
					/>
					<Form.Text
						className="text-muted"
						style={{
							color: "black",
							background: "white",
							textDecoration: "underline"
						}}
					>
						We'll never share your email with anyone else.
        			</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						value={register.password}
						onChange={doChange}
					/>
				</Form.Group>

				<Button variant="info" type="submit">
					Submit
        </Button>
			</Form>
		</div>
	);
};

const mapStateToProps = state => ({
	error: state.error,
	register: state.register,
	inProgress: state.inProgress
})

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
