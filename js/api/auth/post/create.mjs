import {POSTS_API_URL} from "../../constants.mjs"

import { authFetch } from "./authFetch.mjs";

export async function createPosts(postData) {
  const createPostURL = POSTS_API_URL;

  const response = await authFetch(createPostURL{
    body: JSON.stringify(postData)
  });

  const post = await response.json()

  console.log(post)
}
