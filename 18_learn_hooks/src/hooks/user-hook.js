import { useContext } from "react";
import { TokenContext, UserContex } from "../App";

function useUserContext() {
  const user = useContext(UserContex);
  const token = useContext(TokenContext);

  return [user, token];
}

export default useUserContext;