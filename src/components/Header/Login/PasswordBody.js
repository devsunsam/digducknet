import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useForm } from "react-hook-form";
import MsgDanger from "../../Common/MsgDanger";

const PasswordBody = () => {
  const [state, setState] = useState({
    email: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _changeForm = (e) => {
    switch (e.currentTarget.name) {
      case "email":
        setState({ ...state, email: e.currentTarget.value });
        break;

      default:
        console.log("default");
    }
  };
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        {/* <EmailForm/> */}
        <Form.Row>
          <Form.Label column="lg">e-mail</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="example@example.com"
            onChange={_changeForm}
            {...register("Email", {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Row>

        <Form.Row className="d-flex mt-4 flex-row-reverse">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Row>
      </Form.Group>
    </form>
  );
};

export default PasswordBody;
