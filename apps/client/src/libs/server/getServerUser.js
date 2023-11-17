import { cookies } from "next/headers";
import { host } from "../../../host.config";
import { revalidateTag } from "next/cache";
import "server-only";

async function getServerUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (token?.value) {
    try {
      const url = `${host}/api/users/me`;
      const res = await fetch(url, {
        method: "GET",
        next: { revalidate: 3600 * 12 * 7 },
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        next: { tags: ["user-data"] },
      });
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      return null;
    }
  } else {
    revalidateTag("user-data");
  }
}

export default getServerUser;
