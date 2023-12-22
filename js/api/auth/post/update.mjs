import { POSTS_API_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

export async function updatePost(postData) {
  const updatePostURL = `${POSTS_API_URL}/${postData.id}`;
  if (!postData.id) {
    throw new Error("Error while deleting post id");
  }

  const response = await authFetch(updatePostURL, {
    method: "put",
    body: JSON.stringify(postData),
  });
  return await response.json();
}
