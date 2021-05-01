import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";

const PasswordBody = () => {
  const [state, setState] = useState({
    id: "",
    pw: "",
    login: false,
  });
  const _changeID = (e) => {
    const id_v = e.currentTarget.value;
    setState({ ...state, id: id_v });
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
      
      <Form.Row className="d-flex mt-4 flex-row-reverse">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Row>
    </Form.Group>
  );
};

export default PasswordBody;
