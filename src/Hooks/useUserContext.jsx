import { useContext } from "react";
import userContext from "../context/context";

const useUserContext = () => {
  return useContext(userContext);
};

export default useUserContext;
