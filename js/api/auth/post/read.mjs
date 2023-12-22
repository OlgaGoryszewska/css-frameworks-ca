import { POSTS_API_URL } from "../../constants.mjs";
import { authFetch } from "./authFetch.mjs";

export async function getPosts() {
  const updatePostURL = `${POSTS_API_URL}`;
  const response = await authFetch(updatePostURL);

  return await response.json();
}

export async function getPost(id) {
  const updatePostURL = `${POSTS_API_URL}/${id}`;
  const response = await authFetch(updatePostURL);
  return await response.json();
}
