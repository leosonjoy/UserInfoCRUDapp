import React, { useReducer, useState } from "react";
import userContext from "./context";
import { data } from "../data";
import reducer from "../reducer/reducer";

const initialState = {
  users: data,
  editedUser: [],
  isToast: "",
  toastText: "",
};
const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editIcon, setEditIcon] = useState(false);
  const value = {
    users: state.users,
    isToast: state.isToast,
    toastText: state.toastText,
    editUserIndex: state.editUserIndex,
    editedUser: state.editedUser,
    editIcon: editIcon,
    setEditIcon: setEditIcon,
    addUser: (newUser) => {
      dispatch({ type: "ADD_USER", payload: newUser });
    },

    editUser: (id) => {
      dispatch({ type: "EDIT_USER", payload: id });
    },
    update: (editUserInfo) => {
      dispatch({ type: "UPDATE_USER", payload: editUserInfo });
    },

    deleteUser: (id) => {
      dispatch({ type: "DELETE_USER", payload: id });
    },
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UsersProvider;
