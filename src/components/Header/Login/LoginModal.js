
import React, { useState, useRef } from "react";
import { Modal, Button, Nav, Navbar } from "react-bootstrap";

import LoginBody from "./LoginBody";
import PasswordBody from "./PasswordBody";
import SignInBody from "./SignInBody";

const LoginModal = (props) => {
  const [state, setState] = useState({
    select: "login",
    modalShow: true,
    id: "",
    pw: "",
    login: false,
  });

  // const _setModal = (torf)=>{
  //   setState({ ...state, modalShow: torf });
  // }
  const _clickLogin = () => {
    setState({ ...state, select: "login" });
  };
  const _clickPassword = () => {
    setState({ ...state, select: "password" });
  };
  const _clickSignIn = () => {
    setState({ ...state, select: "signin" });
  };

  return (
    <Modal
      {...props}
      // show={state.modalShow}
      // size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Navbar className="p-0">
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link
                // active={state.select === "login" && true}
                {...(state.select === "login" && { 
                  active: true, style:{color:"white", fontWeight:"bold"}})}
                onClick={() => _clickLogin()}
                
              >
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                {...(state.select === "password" && { 
                  active: true, style:{color:"white", fontWeight:"bold"}})}
                onClick={() => _clickPassword()}
              >
                Password?
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                {...(state.select === "signin" && { 
                  active: true, style:{color:"white", fontWeight:"bold"}})}
                onClick={() => _clickSignIn()}
              >
                Sign in
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Modal.Header>
      <Modal.Body>
        {(function () {
          if (state.select === "login") return <LoginBody></LoginBody>;
          if (state.select === "password") return <PasswordBody></PasswordBody>;
          if (state.select === "signin") return <SignInBody></SignInBody>;
        })()}
      </Modal.Body>
      {/* <Modal.Footer> */}
        {/* <Button onClick={props.onHide}>Close</Button> */}
      {/* </Modal.Footer> */}
    </Modal>
  );
};

export default LoginModal;
