import React, { useReducer } from "react";
import userContext from "./context";
import { data } from "../data";
import reducer from "../reducer/reducer";

const initialState = {
  users: data,
  editedUser: [],
  isModal: "",
  modalText: "",
};
const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    users: state.users,
    isModal: state.isModal,
    modalText: state.modalText,
    editUserIndex: state.editUserIndex,
    editedUser: state.editedUser,
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
