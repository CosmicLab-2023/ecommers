import { cookies } from "next/headers";

import { host } from "../../../../../host.config";
import axios from "axios";

export async function POST(req) {
  const { identifier, password } = await req.json();
  try {
    const res = await axios.post(`${host}/api/auth/local`, {
      identifier,
      password,
    });

    const {jwt, user} = res.data;

    cookies().set('token', jwt)

    return Response.json({ user, jwt });
  } catch (err) {
    if (err.response.data.error) {
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
