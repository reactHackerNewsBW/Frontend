import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Anime from "react-anime";

function clg(...exes) {
  for (let x of exes) console.log(x);
}

const URL = "http://localhost:5000/api";

export default function Register() {
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
        alert("Login Triggered");
        sessionStorage.setItem("token", res.data.payload);

        setIsRegged(true);
        clg("--- Registered ++");
        // props.history.push("list");
      })
      .catch(err => clg(`>>> PROBLEM -- Register > axios :: ${err}`));
  };

  return (
    <Anime duration={8000} delay={(e, i) => i * 100}
      scale={[.1, .9]}>
      <Card className="Login">
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
            <Form.Label className="formfont">Enter your username 📛</Form.Label>
            <Form.Control
              type="text"
              placeholder=". . . here"
              name="username"
              value={register.username}
              onChange={doChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="formfont">Enter your passkey 🗝</Form.Label>
            <Form.Control
              type="password"
              placeholder=". . . & here"
              name="password"
              value={register.password}
              onChange={doChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign In 
        </Button>
        </Form>
      </Card>

    </Anime>

  );
}
