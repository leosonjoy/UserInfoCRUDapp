import { useState } from "react";
import useUserContext from "../Hooks/useUserContext";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BiEdit } from "react-icons/bi";

function EditUser() {
  const { editIcon, editedUser, update } = useUserContext();
  const [show, setShow] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    name: "",
    email: "",
    id: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    update(updateUser);
    setShow(false);
    setUpdateUser({ id: "", name: "", email: "" });
  };

  const handleInput = (e) => {
    setUpdateUser({
      ...updateUser,
      [e.target.name]: e.target.value,
      id: editedUser.id,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        {editIcon ? <BiEdit /> : "Edit User"}
      </Button>
      {/* {editIcon ? <Button:<Button variant="warning" onClick={handleShow}>Edit User</Button>} */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
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
                value={updateUser.name}
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
                value={updateUser.email}
                onChange={handleInput}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="success" type="submit">
                Update
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditUser;
