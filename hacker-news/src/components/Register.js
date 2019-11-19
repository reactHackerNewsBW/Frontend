import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

export default function Register() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 700px;
    padding-top: 22%;
  `;
  const DivForForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Container>
      <DivForForm>
        <Form style={{ width: "400px" }}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              type="email"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Password"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ color: "white", background: "#0dbd10" }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </DivForForm>
    </Container>
  );
};
