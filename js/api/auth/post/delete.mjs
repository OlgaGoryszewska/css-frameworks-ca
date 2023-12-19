import { POSTS_API_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

export async function removePost(id) {
  if (!id) {
    throw new Error("Error while deleting post id");
  }

  const updatePostURL = `${POSTS_API_URL}/${id}`;
  const response = await authFetch(updatePostURL, {
    method: "delete",
  });
  return await response.json();
}
