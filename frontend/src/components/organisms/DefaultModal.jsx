import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function DefaultModal(props) {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading {props.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
}
