import React from "react";
import { Form, Icon, Input, Button, Checkbox, Card } from "antd";

import "antd/dist/antd.css";

export default function Login() {
  const submit = () => {};

  return (
    <Card className="Form">
      <Form onSubmit={submit} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{}} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
            prefix={<Icon type="key" style={{}} />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large">
            Login!
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
