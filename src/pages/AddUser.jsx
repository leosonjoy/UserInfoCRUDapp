import React, { useState } from "react";
import UserRegistration from "../Components/UserRegistration";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Example from "../Components/UserRegistration";

const AddUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Link to="/">
        <Button variant="primary">All User List</Button>
      </Link>
      {/* <UserRegistration /> */}
      {/* <Button variant="primary" onClick={handleShow} useOnShow={useOnShow}>
        Launch demo modal
      </Button> */}
      <Example />
    </>
  );
};

export default AddUser;
