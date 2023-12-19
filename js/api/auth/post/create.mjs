import { POSTS_API_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

export async function createPost(postData) {
  const createPostURL = POSTS_API_URL;

  try {
    const response = await authFetch(createPostURL, {
      method: "post",
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating post:", error);
  }
}
