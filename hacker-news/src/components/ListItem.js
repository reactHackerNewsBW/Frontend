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
    <div>
      <a href={url}>
        <ListGroup id={id}>
          <ListGroup.Item
            action
            variant="success"
            style={{
              textAlign: "center",
            }}
          >
            <Badge variant="secondary"> New</Badge>
            &nbsp;&nbsp; &nbsp;&nbsp; {title}
          </ListGroup.Item>
        </ListGroup>
      </a>
    </div>
  );
};

export default ListItem;
