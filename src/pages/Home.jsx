import React from "react";
import UserCount from "../Components/UserCount";
import Users from "../Components/Users";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <UserCount />
      <Link to="/addUser">
        <Button variant="primary">Create New User</Button>
      </Link>

      <Users />
    </div>
  );
};

export default Home;
