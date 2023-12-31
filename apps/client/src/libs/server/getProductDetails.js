import { host } from "../../../host.config";
import "server-only";

async function getProductDetails(slug) {
  try {
    const url = `${host}/api/products/${slug}`;
    const res = await fetch(url, {
      method: "GET",
      next: { tags: [`product/${slug}`] },
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data
  } catch (error) {
    return null;
  }
}

export default getProductDetails;
