import React, { useState, useEffect } from "react";
import axios from "axios";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const URL = "https://bw-backend-hn.herokuapp.com/api/auth/login"

export default function Login(props) {
	const [cred, setCred] = useState({ username: "", password: "", email: "" });
	const [isLogged, setIsLogged] = useState(false);

	// control form fields
	const doChange = e => {
		setCred({ ...cred, [e.target.name]: e.target.value });
	}

	// form submit
	const loginAction = e => {
		e.preventDefault();
		// axios call to get login creds from backend
		axios

			/*	
			WATCH FOR CHANGE
			*/
			.post(`${URL}/login`, cred)
			.then(res => {
				sessionStorage.setItem("token", res.data.payload);
				setIsLogged(true)
				clg("--- Logged ++")
				/*
				WATCH FOR CHANGE
				*/
				// props.history.push("list");
			})
			.catch(err => clg(`>>> PROBLEM -- Login > axios :: ${err}`))
	}

	useEffect(() => {
		sessionStorage.getItem("token") ? setIsLogged(true) : setIsLogged(false);
		/* 
		CHECK
		if logged in, bypass LOGIN page, directly to list
	
		<Redirect /> from react in the return()
		 */
	}, [])

	return (
		/*
		WATCH FOR CHANGE
		*/
		<>
			<form onSubmit={loginAction}>
				<input type="text" placeholder="EMail" name="email" value={cred.email} onChange={doChange} />
				<input type="text" placeholder="Username" name="username" value={cred.username} onChange={doChange} />
				<input type="password" placeholder="Password" name="password" value={cred.password} onChange={doChange} />
				<button>login</button>
			</form>
		</>
	)
}