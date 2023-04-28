import React, { useState } from "react";
import useUserContext from "../Hooks/useUserContext";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./EditUser.module.css";

const EditUser = () => {
  const { editedUser, update, isModal, modalText } = useUserContext();

  const [inputUser, setInputUser] = useState(editedUser);
  const [updateUser, setUpdateUser] = useState({ name: "", email: "", id: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    update(updateUser);
    setInputUser({ id: "", name: "", email: "" });
  };

  const handleInput = (e) => {
    setInputUser({
      ...inputUser,
      [e.target.name]: e.target.value,
      id: inputUser.id,
    });

    setUpdateUser({
      ...updateUser,
      [e.target.name]: e.target.value,
      id: inputUser.id,
    });
  };

  const message =
    isModal === "edit" ? (
      <p className={style.modalEdit}>{modalText}</p>
    ) : (
      <p className={style.modalUpdate}>{modalText}</p>
    );

  return (
    <div className={style.formContent}>
      <h1>Update User</h1>
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
        <Button variant="success" type="submit">
          Update
        </Button>
        {message}
      </Form>
    </div>
  );
};

export default EditUser;
