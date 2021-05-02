import React from "react";


// import { Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import ConHeadDropLogin from "./ConHeadDropLogin";

const Header = () => {
 
  return (
    <div>
      <Navbar className="px-0" bg="white" fixed="top" sticky="top">
        <div className="col-md-2 d-none d-xl-flex"></div>

        <Navbar.Brand href="/">
          <img
            src="/img/index/digduck_logo_40.png"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Nav
          className="mr-auto"
          justify
          variant="pills"
          defaultActiveKey="/home"
        >
          <Nav.Item>
            <Nav.Link href="/home">Article</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Community</Nav.Link>
          </Nav.Item>
        </Nav>
        

        <Nav>
          <ConHeadDropLogin></ConHeadDropLogin>
        </Nav>

        <div className="col-md-3 bg-dark d-none d-xl-flex"></div>
      </Navbar>
    </div>
  );
};

export default Header;
