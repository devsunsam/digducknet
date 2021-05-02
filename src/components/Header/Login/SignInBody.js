import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import { useForm } from "react-hook-form";
import MsgDanger from "../../Common/MsgDanger";

const SignInBody = () => {
  // const [state, setState] = useState({
  //   email: "",
  //   userID: "",
  //   userPW1: "",
  //   userPW2: "",
  //   createDate: "",
  // });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const pwdMatch = useRef({});
  pwdMatch.current = watch("pw1", "");

  // const _changeForm = (e) => {
  //   switch (e.currentTarget.name) {
  //     case "email":
  //       setState({ ...state, email: e.currentTarget.value });
  //       break;
  //     case "userID":
  //       setState({ ...state, userID: e.currentTarget.value });
  //       break;
  //     case "userPW1":
  //       setState({ ...state, userPW1: e.currentTarget.value });
  //       break;
  //     case "userPW2":
  //       setState({ ...state, userPW2: e.currentTarget.value });
  //       break;
  //     default:
  //       console.log("default");
  //   }
  // };

  // const _submitForm = async function () {
  //   const data = {
  //     email: state.email,
  //     userID: state.userID,
  //     userPW: state.userPW1,
  //   };
    
  const onSubmit = async (data) => {
    // alert(JSON.stringify(data));
    const res = await axios("user/signin", {
      method: "POST",
      data: { email: data.email, id: data.id, pw: data.pw1,  },
      headers: new Headers(),
    });

    if (res) {
      console.log(res);
      return true;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Row>
          <Form.Label column="lg">e-mail</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="example@example.com"
            // onChange={_changeForm}
            name="email"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Row>
        <Form.Row>
          <Form.Label column="lg">id</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="id"
            // onChange={_changeForm}
            // name="userID"
            {...register("id", {
              required: true,
              validate: {
                positiveNumber: (value) => value.length > 2,
                lessThanHundred: (value) => value.length < 18,
              },
            })}
          />
          {errors.id && errors.id.type === "positiveNumber" && (
            <MsgDanger err="more 2 digits" />
          )}
          {errors.id && errors.id.type === "lessThanHundred" && (
            <MsgDanger err="less than 18 digits" />
          )}
        </Form.Row>
        <Form.Row>
          <Form.Label column="lg">Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder="Password"
            // onChange={_changeForm}
            // name="userPW1"
            autoComplete="false"
            {...register("pw1", {
              required: true,
              validate: {
                positiveNumber: (value) => value.length >= 8,
                lessThanHundred: (value) => value.length <= 30,
              },
            })}
          />
          {errors.pw1 && errors.pw1.type === "positiveNumber" && (
            <MsgDanger err="more 8 digits" />
          )}
          {errors.pw1 && errors.pw1.type === "lessThanHundred" && (
            <MsgDanger err="less than 30 digits" />
          )}
        </Form.Row>
        <Form.Row>
          <Form.Label column="lg">Password Confirm</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder="Password Confirm"
            // onChange={_changeForm}
            // name="userPW2"
            autoComplete="false"
            {...register("pw2", {
              required: true,
              validate: {
                pwdMatch: (value) => value === pwdMatch.current,
                positiveNumber: (value) => value.length >= 8,
                lessThanHundred: (value) => value.length <= 30,
              },
            })}
          />
          {errors.pw2 && errors.pw2.type === "positiveNumber" && (
            <MsgDanger err="more 8 digits" />
          )}
          {errors.pw2 && errors.pw2.type === "lessThanHundred" && (
            <MsgDanger err="less than 30 digits" />
          )}
          {errors.pw2 && errors.pw2.type === "pwdMatch" && (
            <MsgDanger err="no match" />
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

export default SignInBody;
