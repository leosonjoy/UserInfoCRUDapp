const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
        isToast: "add",
        toastText: "New user is Added  successfully",
      };

    case "UPDATE_USER":
      const targetIndex = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      state.users.splice(targetIndex, 1, action.payload);
      return {
        ...state,
        users: state.users,
        isToast: "update",
        toastText: "User Updated  successfully",
      };

    case "EDIT_USER":
      const editUser = state.users.filter((user) => user.id === action.payload);

      return {
        ...state,
        users: state.users,
        editedUser: editUser[0],
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
        isToast: "delete",
        toastText: `${deletedUser[0].name} is deleted successfully from your User list `,
      };

    default:
      return state;
  }
};

export default reducer;
