import { deleteCookie } from "cookies-next";
// import { revalidateTag } from "next/cache";
import { removeToken, removeUser } from "../features/userSlice";

export default function handleLogout(dispatch, callback = () => {}) {
  deleteCookie("token");
  // revalidateTag("user-data");
  if (dispatch) {
    dispatch(removeUser());
    dispatch(removeToken());
    callback();
  }
}
