import { POSTS_API_URL } from "../../constants.mjs";

import { authFetch } from "./authFetch.mjs";

export async function createPost(postData) {
  const createPostURL = POSTS_API_URL;

  const response = await authFetch(createPostURL, {
    method: "post",
    body: JSON.stringify(postData),
  });

  const post = await response.json();

  console.log(post);
}
