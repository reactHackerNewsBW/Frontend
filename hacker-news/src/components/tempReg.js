import React, { useState, useEffect } from "react";
import axios from "axios";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const URL = "http://localhost:5000/api"

export default function Register(props) {
	const [register, setRegister] = useState({ username: "", password: "" });
	const [isRegged, setIsRegged] = useState(false);

	// control form fields
	const doChange = e => {
		setRegister({ ...register, [e.target.name]: e.target.value });
	}

	// form submit
	const registerAction = e => {
		e.preventDefault();
		// axios call to get login registers from backend
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

	useEffect(() => {
		sessionStorage.getItem("token") ? setIsRegged(true) : setIsRegged(false);
		/* 
		CHECK
		if Logged in, bypass Register page, directly to list
	
		<Redirect /> from react in the return()
		 */
	}, [])

	return (
		/*
		WATCH FOR CHANGE
		*/
		<>
			<form onSubmit={registerAction}>
				<input type="text" placeholder="EMail" name="email" value={register.email} onChange={doChange} />
				<input type="text" placeholder="Username" name="username" value={register.username} onChange={doChange} />
				<input type="password" placeholder="Password" name="password" value={register.password} onChange={doChange} />
				<button>login</button>
			</form>
		</>
	)
}