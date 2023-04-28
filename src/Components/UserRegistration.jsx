import React, { useState } from "react";
import useUserContext from "../Hooks/useUserContext";
import { v4 as uuidv4 } from "uuid";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import style from "./UserRegistration.module.css";

const UserRegistration = () => {
  const [inputUser, setInputUser] = useState({ name: "", email: "", id: "" });

  const { addUser, isModal, modalText } = useUserContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(inputUser);
    setInputUser({ id: "", name: "", email: "" });
  };

  const handleInput = (e) => {
    setInputUser({
      ...inputUser,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    });
  };

  const message = isModal === "add" && (
    <p className={style.modalAdd}>{modalText}</p>
  );

  return (
    <div className={style.formContent}>
      <h1>User Registration</h1>
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
        {/* <Link to="/"> */}
        <Button variant="success" type="submit">
          Create New User
        </Button>
        {/* </Link> */}

        {/* <p className={style.modalText}>{modalText}</p> */}
        {message}
      </Form>
    </div>
  );
};

export default UserRegistration;
