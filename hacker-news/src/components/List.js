import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Anime from "react-anime";
import axios from 'axios';
import Listitem from "./ListItem";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const URL = "https://bw-backend-hn.herokuapp.com/api"

export default function List(props) {
	const [itemsAll, setItemsAll] = useState([])

	useEffect(() => {
		const getList = () => {
			axios
				.get(`${URL}/stories`)
				.then(res => {
					// clg(res.data)
					setItemsAll(res.data)
				})
				.catch(err => {
					console.error(`>>> PROBLEM -- List > axios :: ${err}`)
				})
		}

		getList();
	}, [])

	return (
		<div>

			{itemsAll.reverse().map(single => (
				<Listitem className="TEST" single={single} key={single.id} />
			))}

		</div>
	)
}