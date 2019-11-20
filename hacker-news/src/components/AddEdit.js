import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function clg(...exes) {
	for (let x of exes) console.log(x);
}

const URL = "https://bw-backend-hn.herokuapp.com/api/poststories"

export default function AddEdit(props) {
	const [editID] = useState(props.match.params.id) //props.match.params.id
	const [editFields, setEditFields] = useState({});

	// clg(">>> AddEdit", (editID ? editID : "HA"))

	// const getStory = () => {
	// 	axios
	// 		.get(`https://bw-backend-hn.herokuapp.com/api/stories/${editID}`)
	// 		.then(res => {
	// 			clg(">>> AddEdit > getStory", res.data)
	// 			clg(res)
	// 		})
	// 		.catch(err => clg(`>>> PROBLEM Register > axios :: ${err}`))
	// }

	useEffect(() => {
		// clg(">>> AddEdit > useEffect", (editID ? editID : "HA"))
		if (editID) {
			axios
				.get(`https://bw-backend-hn.herokuapp.com/api/stories/${editID}`)
				.then(res => {
					clg(">>> AddEdit > getStory", res.data[0].title)
					setEditFields(res.data[0]);
				})
				.catch(err => clg(`>>> PROBLEM AddEdit > axios :: ${err}`))
		}
	}, [])

	// control form fields
	const doChange = e => {
		setEditFields({ ...editFields, [e.target.name]: e.target.value });
		clg(editFields);
	}

	// form submit
	const editAction = incoming => {
		axios
			.post(URL, { title: editFields.title, url: editFields.url })
			.then(res => {
				clg(res)
				// props.history.push("/list");
			})
			.catch(err => clg(`>>> PROBLEM AddEdit > axios :: ${err}`))
	}

	let pagetitle;
	editID
		? pagetitle = "Edit Existing Article"
		: pagetitle = "Add New Article"

	return (
		<div className="Container">
			<p style={{ fontWeight: "bold" }}>{pagetitle}</p>
			<br />
			<Form
				onSubmit={editAction}
				style={{
					border: "5px solid green",
					padding: "40px",
					borderRadius: "25px",
					boxShadow: "5px 8px black"
				}}
			>
				<Form.Group controlId="formBasicUsername">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Article Title"
						name="title"
						value={editFields.title}
						onChange={doChange}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>Link to article</Form.Label>
					<Form.Control
						type="url"
						placeholder="URL"
						name="url"
						value={editFields.url}
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
