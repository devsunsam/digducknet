import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import LoginModal from "./LoginModal"
import "./HeadDropLogin.css";


const HeadDropLogin = ({loginStatus, visible, onVisibleModal }) => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      className="d-flex"
      style={{color:"#3D4849", textDecorationLine: "none"}}
      href="#!"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      
    >
      {children}
      <div className="d-flex align-self-center p-1">&#x25bc;</div>
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  return (
    <>
      {loginStatus ? (
        null
      ) : (
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <h4>
              <FaUserCircle />
            </h4>
          </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1"  className="d-flex align-items-center"
              onClick={onVisibleModal}>
              <h4 className="px-1">
                <FaUserCircle />
              </h4>
              Login
            </Dropdown.Item>
            <LoginModal
              show={visible}
              onHide={onVisibleModal}
            />
            <Dropdown.Divider />
            <Dropdown.Item eventKey="1"  className="d-flex align-items-center">
              <h4 className="px-1">
                <FaUserCircle />
              </h4>
              Logout
            </Dropdown.Item>
              
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default HeadDropLogin;
