import React from "react";
import useUserContext from "../../Hooks/useUserContext";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EditUser from "../EditUser";

const CardViewUser = (props) => {
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
        <div className="d-flex flex-row justify-content-between p-0">
          <div className="p-0" onClick={() => handleEdit(id)}>
            <EditUser />
          </div>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            Delete User
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardViewUser;
