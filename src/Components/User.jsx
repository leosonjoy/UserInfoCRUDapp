import React from "react";
import { Link } from "react-router-dom";
import useUserContext from "../Hooks/useUserContext";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const User = (props) => {
  const { id, name, email } = props.user;
  const { editUser, deleteUser } = useUserContext();

  const handleDelete = (id) => {
    deleteUser(id);
  };
  const handleEdit = (id) => {
    editUser(id);
  };
  return (
    <Card style={{ width: "16rem" }} className="bg-secondary text-white p-1">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="mb-5">{email}</Card.Text>
        <Link to="/updateUser">
          <Button
            variant="warning"
            className="mx-2"
            onClick={() => handleEdit(id)}
          >
            Edit User
          </Button>
        </Link>
        <Button variant="danger" onClick={() => handleDelete(id)}>
          Delete User
        </Button>
      </Card.Body>
    </Card>
  );
};

export default User;
