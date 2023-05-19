import React from "react";
import useUserContext from "../../Hooks/useUserContext";
import style from "./Users.module.css";

import CardViewUser from "../User/CardViewUser";

const CardViewUsers = () => {
  const { users } = useUserContext();

  return (
    <section>
      <div className={style.userContent}>
        {users.map((user) => (
          <CardViewUser key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default CardViewUsers;
