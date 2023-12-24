import { createPost } from "../api/auth/post/index.mjs";

export function setCreatePostListener() {
  const form = document.querySelector("#createPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitForm = event.target;
      const formData = new FormData(submitForm);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      try {
        await createPost(post);
        // Handle success (e.g., redirect, show success message)
      } catch (error) {
        console.error("Error creating post:", error);
        // Handle error (e.g., display error message)
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const newPostButton = document.querySelector("#newPostButton");

  newPostButton.addEventListener("click", () => {
    window.location.href = "../../post/create/index.html";
  });
});
