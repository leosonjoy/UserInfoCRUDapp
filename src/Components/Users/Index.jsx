import React, { useState } from "react";

import useUserContext from "../../Hooks/useUserContext";
import style from "./Users.module.css";
import { BiTable, BiIdCard } from "react-icons/bi";

import TableViewUsers from "./TableViewUsers";
import CardViewUsers from "./CardViewUsers";
import UserRegistration from "../UserRegistration";

const Users = () => {
  const [view, setView] = useState("");
  const { setEditIcon } = useUserContext();

  const handleTable = () => {
    setView("table");
    setEditIcon(true);
  };
  const handleCard = () => {
    setView("card");
    setEditIcon(false);
  };

  return (
    <div className={style.container}>
      <div className={style.btnGroup}>
        <UserRegistration />
        <div>
          <BiTable onClick={handleTable} className={style.icon} />
          <BiIdCard onClick={handleCard} className={style.icon} />
        </div>
      </div>
      {view === "table" && <TableViewUsers />}
      {view === "card" && <CardViewUsers />}
      {view === "" && <CardViewUsers />}
    </div>
  );
};

export default Users;
