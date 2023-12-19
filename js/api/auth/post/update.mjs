import { POSTS_API_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

export async function updatePost(postData) {
  const updatePostURL = `${POSTS_API_URL}/${postData.id}`;

  try {
    const response = await authFetch(updatePostURL, {
      method: "put",
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating post:", error);
  }
}
