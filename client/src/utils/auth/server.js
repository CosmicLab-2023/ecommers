import { cookies } from "next/headers";
import "server-only";

export default function isAuthenticated(request = null) {
  if (request) {
    return request.cookies.has("token") ?? false;
  } 
  const cookieStore = cookies();
  const token = cookieStore.get("token") ?? false;
  return token;
}
