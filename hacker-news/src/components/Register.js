import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { register } from "../actions"

import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";


function clg(...exes) {
	for (let x of exes) console.log(x);
}

const URL = "https://bw-backend-hn.herokuapp.com/api/auth/register"

const Register = (props) => {
	const [regFields, setRegFields] = useState({ username: "", password: "", email: "" });

	const {register} = props;

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
		clg("regfields",regFields)
		axios

			/*	
			WATCH FOR CHANGE
			*/
			.post(URL, {username: incoming.username, password: incoming.password})
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
		// <Container>
		// <DivForForm>
		<Form onSubmit={registerAction} style={{ width: "400px" }} >
			<Form.Item>
				<Input
					name="username" value={register.username} onChange={doChange}
					prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
					placeholder="Username" type="text"
				/>
			</Form.Item>
			<Form.Item>
				<Input
					name="email" value={register.email} onChange={doChange}
					prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
					placeholder="Email" type="email"
				/>
			</Form.Item>
			<Form.Item>
				<Input
					name="password" value={register.password} onChange={doChange}
					prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
					placeholder="Password" type="password"
				/>
			</Form.Item>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					style={{ color: "white", background: "#0dbd10" }}
				>Register</Button>
			</Form.Item>
		</Form>
		// </DivForForm>
		// </Container>
	);
};

const mapStateToProps = state => ({
	error: state.error,
	register: state.register,
	inProgress: state.inProgress
})

const mapDispatchToProps = {register};

export default connect (mapStateToProps, mapDispatchToProps)(Register);
