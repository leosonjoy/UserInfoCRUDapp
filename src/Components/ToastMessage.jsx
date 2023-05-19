import React, { useState } from "react";
import style from "./ToastMessage.module.css";
import useUserContext from "../Hooks/useUserContext";

const ToastMessage = () => {
  const { isToast, toastText } = useUserContext();

  const message =
    isToast === "add" ? (
      <p className={style.userAdd}>{toastText}</p>
    ) : isToast === "delete" ? (
      <p className={style.userDelete}>{toastText}</p>
    ) : isToast === "update" ? (
      <p className={style.userUpdate}>{toastText}</p>
    ) : (
      <p>{toastText}</p>
    );
  return <div>{message}</div>;
};

export default ToastMessage;
