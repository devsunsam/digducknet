import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const SignInBody = () => {
  const [state, setState] = useState({
    id: "",
    pw: "",
    login: false,
  });
  const _changeID = (e) => {
    const id_v = e.currentTarget.value;
    setState({ ...state, id: id_v });
  };
  const _changePW = (e) => {
    const pw_v = e.currentTarget.value;
    setState({ ...state, pw: pw_v });
  };

  return (
    <Form.Group>
      <Form.Row>
        <Form.Label column="lg">e-mail</Form.Label>
        <Form.Control
          size="lg"
          type="email"
          placeholder="example@example.com"
          onChange={_changeID}
        />
      </Form.Row>
      <Form.Row>
        <Form.Label column="lg">id</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="example@example.com"
          onChange={_changeID}
        />
      </Form.Row>
      <Form.Row>
        <Form.Label column="lg">Password</Form.Label>
        <Form.Control
          size="lg"
          type="password"
          placeholder="Password"
          onChange={_changePW}
          name="pw1"
        />
      </Form.Row>
      <Form.Row>
        <Form.Label column="lg">Password Confirm</Form.Label>
        <Form.Control
          size="lg"
          type="password"
          placeholder="Password Confirm"
          onChange={_changePW}
          name="pw2"
        />
      </Form.Row>
      <Form.Row className="d-flex mt-4 flex-row-reverse">
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form.Row>
    </Form.Group>
  );
};

export default SignInBody;
