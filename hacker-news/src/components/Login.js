import React from "react";
import { useState, useEffect } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default function Login() {

  const [isSignin, setIsSignin] = useState({
    username: "",
    password: "",
  });

  const doChange = e => {
    clg(e.target.name, e.target.value);
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  // form submit
  const registerAction = e => {
    e.preventDefault();

  };
  return (
    <div>
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@hackerclone.news</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <Input type="password" placeholder="password" />
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@hackerclone.news</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
