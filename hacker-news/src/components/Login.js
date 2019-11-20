import React from "react";
import { useState, useEffect } from 'react';
import { Card, Form, Label, Input, FormGroup } from 'reactstrap';

export default function Login() {

  const [isSignin, setIsSignin] = useState({
    username: "",
    password: "",
  });

  return (
    <Card>
      <Form>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="login_email" placeholder="what's your email? 💁🏿‍" />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="login_password" placeholder="what's your password? 🔑" />
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
          <Button>Sign In</Button>
        </FormGroup>
      </Form>
    </Card>
  )
};