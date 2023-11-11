import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get("tag");
  const path = request.nextUrl.searchParams.get("path");
  const type = request.nextUrl.searchParams.get("type");
  let revalidatedTag = false;
  let revalidatedPath = false;
  if (typeof tag === "string") {
    revalidateTag(tag);
    revalidatedTag = true;
  }
  if (typeof path === "string") {
    revalidatePath(path, type ? "layout" : "page");
    revalidatedPath = true;
  }
  return Response.json({ revalidatedTag, revalidatedPath, now: Date.now() });
}
