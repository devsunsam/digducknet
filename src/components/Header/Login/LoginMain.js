import React, { useState } from "react";
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";
import LoginModal from "./LoginModal";

const LoginMain = () => {
  const [state, setState] = useState({
    loginStatus: false,
    visible: false,
  });

  const _visible = () => {
    setState({ ...state, visible: !state.visible });
  };
  return (
    <>
      {state.loginStatus ? null : (
        <div style={{ cursor: "pointer", color: "#747474" }}>
          <h4 className="px-1">
            <FaSignInAlt onClick={_visible} />
          </h4>

          <LoginModal show={state.visible} onHide={_visible} />
        </div>
      )}
    </>
  );
};

export default LoginMain;
