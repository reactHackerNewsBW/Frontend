import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom"

import List from "./List";
import Badge from "react-bootstrap/Badge";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const ListItem = props => {
	const { id, title, url } = props.single;

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
						<Link to={`/edit/${id}`}>edit</Link>
						
					</ListGroup.Item>
				</ListGroup>
			</a>
		</div>
	);
};

export default ListItem;
