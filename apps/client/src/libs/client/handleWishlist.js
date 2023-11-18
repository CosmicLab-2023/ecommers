import axios from "axios";

export async function setToUserWishlists(wishlists) {
  try {
    const url = `/api/me/wishlists`;
    const res = await axios.put(url, {
      wishlists: wishlists,
    });
    if (res.data.wishlists) {
      return;
    }
    if (res?.data?.message) {
      return { error: res?.data?.message ?? "Unknown Error" };
    }
  } catch (error) {
    return { error: error?.response?.data?.message ?? "Unknown Error" };
  }
}
