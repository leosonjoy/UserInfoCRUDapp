import React from "react";
import UserRegistration from "../Components/UserRegistration";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddUser = () => {
  return (
    <>
      <Link to="/">
        <Button variant="primary">All User List</Button>
      </Link>
      <UserRegistration />
    </>
  );
};

export default AddUser;
