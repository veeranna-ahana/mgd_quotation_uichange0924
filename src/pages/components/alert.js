import React from "react";
import {
  // Container,
  // Row,
  // Col,
  // Form,
  Button,
  // Card,
  Modal,
} from "react-bootstrap";

function AlertModal(props) {
  // const [show, setShow] = useState(props.show);

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{fontSize:'14px'}}>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{fontSize:'12px'}}>
        <p>{props.message}</p>
      </Modal.Body>

      <Modal.Footer>
        <button
          className="button-style"

          onClick={() => {
            props.firstbutton();
          }}
        >
          {props.firstbuttontext}
        </button>
        <button
        className="button-style"
          variant="secondary"
          onClick={() => {
            props.secondbutton();
          }}
        >
          {props.secondbuttontext}
        </button>
        {props.thirdbuttontext !== "" && props.thirdbuttontext !== undefined ? (
          <button
          className="button-style"
            variant="btn-secondary"
            onClick={() => {
              props.thirdbutton();
            }}
          >
            {props.thirdbuttontext}
          </button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
}

export default AlertModal;
