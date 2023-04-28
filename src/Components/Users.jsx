import React from "react";
import useUserContext from "../Hooks/useUserContext";

import User from "./User";
import style from "./Users.module.css";

const Users = () => {
  const { users, isModal, modalText } = useUserContext();
  const message = isModal === "delete" && (
    <p className={style.modalDelete}>{modalText}</p>
  );

  return (
    <section>
      {message}
      <div className={style.userContent}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default Users;
