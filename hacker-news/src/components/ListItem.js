<<<<<<< HEAD
import React from "react";
import antd from "antd";
=======
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom"

import List from "./List";
import Badge from "react-bootstrap/Badge";
>>>>>>> 01dfa7c21017a694b16b8c8f47853e4e81b64e20

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
<<<<<<< HEAD

            <Badge variant="primary" style={{ background: "green" }}>

<<<<<<< HEAD
              <Link to={/edit/${id}}>Edit 🖊</Link>
=======
  return (
    <div class="list-links">
      <a href={url} className="list-links">
        <ListGroup
          id={id}
          style={{
            textAlign: "center",
            marginBottom: "70px"
          }}
        >
          <ListGroup.Item
            action
            variant="success"
            style={{
              textAlign: "center",
              width: "700px"
            }}
          >
            <Badge variant="secondary" style={{ background: "black" }}>
              New
>>>>>>> cf0dc7a52bbc617437111ffb5ddc1c43f2453025
            </Badge>
            
          &nbsp;&nbsp; &nbsp;&nbsp; {title}
          </ListGroup.Item>
        </ListGroup>
      </a>
    </div >
  );
=======
						&nbsp;&nbsp; &nbsp;&nbsp; {title}
						<Link to={`/edit/${id}`}>edit</Link>
						
					</ListGroup.Item>
				</ListGroup>
			</a>
		</div>
	);
>>>>>>> 01dfa7c21017a694b16b8c8f47853e4e81b64e20
};

export default ListItem;
