import { cookies } from "next/headers";

import { host } from "../../../../../host.config";

export async function POST(req) {
  const { identifier, password } = await req.json();
  const res = await fetch(`${host}/api/auth/local`, {
    body: {
      identifier,
      password,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return Response.json({ status: res.status, message: res.message });
  }

  const token = await res.json();

  // cookies().set('token', token, { maxAge: 0 })

  return Response.json({ token });
}
