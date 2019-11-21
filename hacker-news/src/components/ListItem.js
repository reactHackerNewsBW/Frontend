import React from "react";
import { ListGroup, Badge } from "react-bootstrap";

function clg(...x) {
  for (let exes of x) console.log(exes);
}

const ListItem = props => {
  const { id, title, url } = props.single;

  clg(title);

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
            </Badge>
            <Badge variant="primary" style={{ background: "yellow", color: "black" }}>
              Save
            </Badge>
            &nbsp;&nbsp; &nbsp;&nbsp; {title}
          </ListGroup.Item>
        </ListGroup>
      </a>
    </div>
  );
};

export default ListItem;
