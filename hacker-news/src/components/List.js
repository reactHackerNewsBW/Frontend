import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import axios from 'axios';
import Listitem from "./ListItem";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const URL = "https://bw-backend-hn.herokuapp.com/api"

export default function List(props) {
	const [item, setItem] = useState([])

	useEffect(() => {
		const getList = () => {
			axios
			.get(`${URL}/stories`)
			.then(res => {
				clg(res.data)
				setItem(res.data)
			})
			.catch(err => {
				console.error(`>>> PROBLEM -- List > axios :: ${err}`)
			})
		}
		
		getList();
	},[])

	return (
		<div>
			{item.map(single => (
				<Listitem single={single} key={single.id}/>
			))}
		</div>
	)
}