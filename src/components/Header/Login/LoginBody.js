import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import MsgDanger from "../../Common/MsgDanger";
import axios from "axios";

const LoginBody = () => {
  const [state, setState] = useState({
    errMsg: "",
    errShow: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const _changeForm = (e) => {
  //   switch (e.currentTarget.name) {
  //     case "email":
  //       setState({ ...state, email: e.currentTarget.value });
  //       break;
  //     case "userPW":
  //       setState({ ...state, userPW2: e.currentTarget.value });
  //       break;
  //     default:
  //       console.log("default");
  //   }
  // };

  const onSubmit = async (data) => {
    // alert(JSON.stringify(data));
    const res = await axios("user/login", {
      method: "POST",
      data: { email: data.email, pw: data.pw },
      headers: new Headers(),
    });

    if (res.data[0]) {
      console.log("Success to log in");
    } else {
      setState({ ...state, errShow: true, errMsg: "Login 실패" });
    }
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        {JSON.stringify(state)}

        <MsgDanger err={state.errMsg} show={state.errShow} />
        <Form.Row>
          <Form.Label column="lg">e-mail</Form.Label>
          <Form.Control
            size="lg"
            placeholder="example@example.com"
            // onChange={_changeForm}
            type="email"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Row>
        <Form.Row>
          <Form.Label column="lg">Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder="Password"
            // onChange={_changeForm}
            autoComplete="false"
            {...register("pw", {
              required: true,
              validate: {
                positiveNumber: (value) => value.length >= 8,
                lessThanHundred: (value) => value.length <= 30,
              },
            })}
          />
          {errors.pw && errors.pw.type === "positiveNumber" && (
            <MsgDanger err="more 8 digits" />
          )}
          {errors.pw && errors.pw.type === "lessThanHundred" && (
            <MsgDanger err="less than 30 digits" />
          )}
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

export default LoginBody;
