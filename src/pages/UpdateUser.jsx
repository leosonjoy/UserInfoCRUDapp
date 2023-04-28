import React from "react";
import EditUser from "../Components/EditUser";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const UpdateUser = () => {
  return (
    <>
      <Link to="/">
        <Button variant="primary">All User List</Button>
      </Link>
      <EditUser />
    </>
  );
};

export default UpdateUser;
