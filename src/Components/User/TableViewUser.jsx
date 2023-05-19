import React from "react";
import { BiTrash } from "react-icons/bi";

import useUserContext from "../../Hooks/useUserContext";
import { Button } from "react-bootstrap";
import EditUser from "../EditUser";

const TableViewUser = (props) => {
  const { id, name, email } = props.user;
  const { editUser, deleteUser } = useUserContext();

  const handleDelete = (id) => {
    deleteUser(id);
  };
  const handleEdit = (id) => {
    editUser(id);
  };
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <div className="p-0 d-flex gap-3 justify-content-center">
            <div onClick={() => handleEdit(id)}>
              <EditUser />
            </div>
            <Button variant="danger" onClick={() => handleDelete(id)}>
              <BiTrash />
            </Button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default TableViewUser;
