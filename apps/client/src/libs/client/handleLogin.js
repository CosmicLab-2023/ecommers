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
    if (res.data.user || res.data.jwt) {
      dispatch(setUser(res.data.user));
      dispatch(setToken(res.data.jwt));
      callback();
    }
    if (res?.data?.message) {
      return { error: res?.data?.message ?? "Unknown Error" };
    }
  } catch (error) {
    return { error: error?.response?.data?.message ?? "Unknown Error" };
  }
}
