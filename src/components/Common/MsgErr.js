import { Alert } from "react-bootstrap";
import { useState, useCallback } from 'react';


const MsgErr = ({err, show=true}) => {
  const [state, setState] = useState({
    show:show
  });
  return (
    <Alert variant="danger" className="py-1" show={show}>
      {err}
    </Alert>
  );
};

export default MsgErr

