import { host } from "../../../host.config";
import "server-only";

async function getProducts() {
  try {
    const url = `${host}/api/products?populate[0]=thumbnail&populate[1]=category&sort[1]=publishedAt:desc`;
    const res = await fetch(url, {
      method: "GET",
      next: { tags: ["products"] },
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data
  } catch (error) {
    return [];
  }
}

export default getProducts;
