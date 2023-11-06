import { host } from "../../../host.config";
import 'server-only'

async function getProducts() {
  const url = `${host}/api/products`;
  const res = await fetch(url, {
    method: "GET",
    next: { tags: ['products'] },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data
}

export default getProducts;
