import { createPost } from "../api/auth/post/index.mjs";

export function setCreatePostListener() {
  const form = document.querySelector("#createPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      createPost(post);
    });
  }
}
