import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import List from "./List";
import Badge from "react-bootstrap/Badge";

function clg(...x) {
  for (let exes of x) console.log(exes);
}

const ListItem = props => {
  const { id, title, url } = props.single;

  clg(title);

  return (
    <div class ="list-links">
      <a href={url} className="list-links">
        <ListGroup
          id={id}
          style={{
            textAlign: "center",
            marginBottom: "100px"
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
            &nbsp;&nbsp; &nbsp;&nbsp; {title}
          </ListGroup.Item>
        </ListGroup>
      </a>
    </div>
  );
};

export default ListItem;
