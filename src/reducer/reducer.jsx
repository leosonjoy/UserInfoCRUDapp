const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
        isModal: "add",
        modalText: "New user is Added  successfully",
      };

    case "UPDATE_USER":
      const targetIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users.splice(targetIndex, 1, action.payload);
      return {
        ...state,
        users: state.users,
        isModal: "update",
        modalText: "User Updated  successfully",
      };

    case "EDIT_USER":
      const editUser = state.users.filter((user) => user.id === action.payload);

      return {
        ...state,
        users: state.users,
        editedUser: editUser[0],
        isModal: "edit",
        modalText: `User info is need to update `,
      };

    case "DELETE_USER":
      const filteredUser = state.users.filter(
        (user) => user.id !== action.payload
      );
      const deletedUser = state.users.filter(
        (user) => user.id === action.payload
      );
      return {
        ...state,
        users: filteredUser,
        isModal: "delete",
        modalText: `${deletedUser[0].name} is deleted successfully from your User list `,
      };
    default:
      return state;
  }
};

export default reducer;
