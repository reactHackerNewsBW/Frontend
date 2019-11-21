import React from "react";
import antd from "antd";

function clg(...x) {
  for (let exes of x) console.log(exes);
}

const ListItem = props => {
  const { id, title, url } = props.single;

  clg(title);

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

            <Badge variant="primary" style={{ background: "green" }}>

              <Link to={/edit/${id}}>Edit 🖊</Link>
            </Badge>
            
          &nbsp;&nbsp; &nbsp;&nbsp; {title}
          </ListGroup.Item>
        </ListGroup>
      </a>
    </div >
  );
};

export default ListItem;
