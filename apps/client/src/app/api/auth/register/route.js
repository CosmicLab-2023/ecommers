import { cookies } from "next/headers";

import { host } from "../../../../../host.config";
import axios from "axios";

export async function POST(req) {
  const { password, username, email } = await req.json();
  try {
    const res = await axios.post(`${host}/api/auth/local/register`, {
      password,
      username,
      email,
    });
    const { jwt, user } = res.data;

    cookies().set("token", jwt);
    cookies().set('userId', user.id)

    return Response.json({ user, jwt });
  } catch (err) {
    if (err?.response?.data?.error) {
      return Response.json({
        status: err.response.data.error.status,
        message: err.response.data.error.message,
      });
    } else {
      return Response.json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  }
}
