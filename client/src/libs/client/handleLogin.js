import axios from "axios";
import { setToken, setUser } from "../features/userSlice";

export default async function handleLogin(
  values,
  dispatch,
  callback = () => {}
) {
  try {
    const url = `/api/auth/login`;
    const res = await axios.post(url, {
      identifier: values.identifier,
      password: values.password,
    });
    dispatch(setUser(res.data.user));
    dispatch(setToken(res.data.jwt));
    callback();
  } catch (e) {
    return { error: e?.response?.data?.message ?? "Unknown Error" };
  }
}
