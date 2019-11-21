/* Author: jffrydsr 
   Date: 11/22/2019
   Copyright: Hacker News Clone ©, 2019
*/
<<<<<<< HEAD
=======

>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
import React from "react";
import { useState, useEffect } from 'react';
import { Card, Form, Label, Input, FormGroup } from 'react-bootstrap';

export default function Login() {

  const [isSignin, setIsSignin] = useState({
    username: "",
    password: "",
  });

  const submitForm = (event) => {
    do {
      event.preventDefault();
    }
  };

  return (
<<<<<<< HEAD
    <Card className="LoginPage">
=======
    <Card>
>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
      <Form>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
<<<<<<< HEAD
          <Input type="email" name="email" id="login_email" placeholder="what's your email? :information_desk_person::skin-tone-6:‍" />
=======
          <Input type="email" name="email" id="login_email" placeholder="what's your email? 💁🏿‍" />
>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
<<<<<<< HEAD
          <Input type="password" name="password" id="login_password" placeholder="what's your password? :key:" />
=======
          <Input type="password" name="password" id="login_password" placeholder="what's your password? 🔑" />
>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Remember this device?</legend>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="login_remember" />{' '}
              Yes
          </Label>

            <Label check>
              <Input type="radio" name="login_remember" />{' '}
              Yes
          </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
<<<<<<< HEAD
          <Button class="submitButton">Sign In</Button>
=======
          <Button>Sign In</Button>
>>>>>>> 18f80efc88f82a2052eb75fd799ef5fa996e8939
        </FormGroup>
      </Form>
    </Card>
  )
};