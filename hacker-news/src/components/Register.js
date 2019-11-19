import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

function clg(...exes) {
	for (let x of exes) console.log(x);
}

const URL = "http://localhost:5000/api"

export const Register = () => {
	const [register, setRegister] = useState({ username: "", password: "", email:"" });
	const [isRegged, setIsRegged] = useState(false);

	//#region styled
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
	//#endregion styled

	// control form fields
	const doChange = e => {
		clg(e.target.name, e.target.value) 
		setRegister({ ...register, [e.target.name]: e.target.value });
	}

	// form submit
	const registerAction = e => {
		e.preventDefault();
		// axios call to get register from backend
		axios

			/*	
			WATCH FOR CHANGE
			*/
			.post(`${URL}/register`, register)
			.then(res => {

				/*
				WATCH FOR CHANGE
				*/
				sessionStorage.setItem("token", res.data.payload);

				setIsRegged(true)
				clg("--- Registered ++")
				// props.history.push("list");
			})
			.catch(err => clg(`>>> PROBLEM -- Register > axios :: ${err}`))
	}


	return (
		<Container>
			<DivForForm>
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
			</DivForForm>
		</Container>
	);
};
