import React from "react";
import useUserContext from "../Hooks/useUserContext";

const UserCount = () => {
  const { users } = useUserContext();
  return (
    <>
      <h2>Total User: {users.length}</h2>
    </>
  );
};

export default UserCount;
