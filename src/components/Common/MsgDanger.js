import { Alert } from "react-bootstrap";

const MsgDanger = ({err, show=true}) => {
  return (
    <Alert variant="danger" className="py-1" show={show}>
      {err}
    </Alert>
  );
};

export default MsgDanger
