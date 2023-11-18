import axios from "axios";
import { cookies } from "next/headers";
import "server-only";
import { host } from "../../../../../host.config";

export async function PUT(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const userId = cookieStore.get("userId");
  const { wishlists } = await req.json();
  console.log(`${host}/api/users/${userId?.value}`);
  try {
    const res = await axios.put(
      `${host}/api/users/${userId?.value}`,
      {
        wishlists: wishlists,
      },
      {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );
    return Response.json({ products: [] });
  } catch (err) {
    console.log(err?.response?.data);
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
