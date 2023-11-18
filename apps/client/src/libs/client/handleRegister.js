import axios from "axios";
import { setToken, setUser } from "../features/userSlice";

export default async function handleRegister(
  values,
  dispatch,
  callback = () => {}
) {
  try {
    const url = `/api/auth/register`;
    const res = await axios.post(url, {
      username: values.username,
      email: values.email,
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
