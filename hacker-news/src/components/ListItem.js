import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom"
import axios from "axios";


import List from "./List";
import Badge from "react-bootstrap/Badge";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const ListItem = props => {
	const { id, title, url } = props.single;

	const delMeNow = (e, id) => {
		// https://bw-backend-hn.herokuapp.com/api/deletestories/:id
		e.preventDefault();
		if (id < 20) {
			clg(id);
			console.error(">>>");
			console.error(">>> WILL NOT PROCEED. Post ID < 20");
			console.error(">>>");
			return;
		} else {
		axios
			.delete(`https://bw-backend-hn.herokuapp.com/api/deletestories/${id}`)
			.then(res => {
				clg(res)
				props.history.push("/list");
			})
			.catch(err => clg(`>>> PROBLEM AddEdit > axios :: ${err}`))
		}
	}

	return (
		<div>
			<a href={url} className="list-links">
				<ListGroup id={id}>
					<ListGroup.Item
						action
						variant="success"
						style={{
							textAlign: "center"
						}}
					>
						<Badge variant="secondary" style={{ background: "black" }}>
							New
            </Badge>
						&nbsp;&nbsp; &nbsp;&nbsp; {title}
						<Link className="space-plus" to={`/edit/${id}`}>edit</Link>
						<button className="space-plus" onClick={e => delMeNow(e, id)}>DELETE</button>
					</ListGroup.Item>
				</ListGroup>
			</a>
		</div>
	);
};

export default ListItem;
