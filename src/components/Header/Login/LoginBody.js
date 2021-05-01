import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const LoginBody = () => {
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

  const _loginView = async (e) => {
    const id = state.id.trim();
    const password = state.pw.trim();

    if (id === "") {
      return alert("아이디를 입력해주세요.");
    } else if (password === "") {
      return alert("비밀번호를 입력해주세요.");
    }

    const res = await axios("/send/pw", {
      method: "POST",
      data: { id: id, password: password },
      headers: new Headers(),
    });

    if (res.data) {
      console.log(res.data.msg);

      if (res.data.suc) {
        sessionStorage.setItem("login", true);
        
        return setState({ ...state, login: true });
      } else {
        return alert("id, pw 일치하지 않음");
      }
    }
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
        <Form.Label column="lg">Password</Form.Label>
        <Form.Control
          size="lg"
          type="password"
          placeholder="Password"
          onChange={_changePW}
          name="pw"
        />
      </Form.Row>
      <Form.Row className="d-flex mt-4 flex-row-reverse">
        <Button variant="primary" type="submit" onClick={_loginView}>
          Submit
        </Button>
      </Form.Row>
    </Form.Group>
  );
};

export default LoginBody;
