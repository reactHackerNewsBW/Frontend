import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import MatrixParallax from "react-matrix-parallax";

function clg(...exes) {
  for (let x of exes) console.log(x);
}

const URL = "http://localhost:5000/api";

export const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [isRegged, setIsRegged] = useState(false);

  //#endregion styled

  // control form fields
  const doChange = e => {
    clg(e.target.name, e.target.value);
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  // form submit
  const registerAction = e => {
    e.preventDefault();
    // axios call to get register from backend
    axios

      /*	
			WATCH FOR CHANGE
			*/
      .post(`${URL}/register`, register)
      .then(res => {
        /*
				WATCH FOR CHANGE
				*/
        sessionStorage.setItem("token", res.data.payload);

        setIsRegged(true);
        clg("--- Registered ++");
        // props.history.push("list");
      })
      .catch(err => clg(`>>> PROBLEM -- Register > axios :: ${err}`));
  };

  return (
    <div className="Container">
      {/* <p style={{ fontWeight: "bold", color: "white", fontSize: "20px" }}>
        Register
      </p> */}
      <br />
      <Form
        onSubmit={registerAction}
        style={{
          border: "5px solid green",
          padding: "40px",
          borderRadius: "25px",
          boxShadow: "5px 8px black"
        }}
      >
        <Form.Group controlId="formBasicUsername">
          <Form.Label className="formfont">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={register.username}
            onChange={doChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="formfont">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={register.email}
            onChange={doChange}
          />
          <Form.Text
            className="text-muted"
            style={{
              color: "black",
              background: "white",
              textDecoration: "underline"
            }}
          >
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="formfont">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={register.password}
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
