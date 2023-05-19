import React, { useState } from "react";
import useUserContext from "../Hooks/useUserContext";
import { v4 as uuidv4 } from "uuid";

import style from "./UserRegistration.module.css";

// React Bootstrap Components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ToastMessage from "./ToastMessage";

function UserRegistration() {
  const [show, setShow] = useState(false);
  const [inputUser, setInputUser] = useState({ name: "", email: "", id: "" });

  const { addUser, isModal, modalText } = useUserContext();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(inputUser);
    setShow(false);
    setInputUser({ id: "", name: "", email: "" });
  };

  const handleInput = (e) => {
    setInputUser({
      ...inputUser,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New User
      </Button>
      <ToastMessage />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mt-3 m-auto bg-light p-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="name"
                id="name"
                name="name"
                value={inputUser.name}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                value={inputUser.email}
                onChange={handleInput}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="success" type="submit">
                Create New User
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default UserRegistration;
