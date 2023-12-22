import { createPost } from "../api/auth/post/index.mjs";

export function setCreatePostListener() {
  const form = document.querySelector("#createPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      try {
        // Attempt to create the post
        await createPost(post);
        // Handle the post creation success here (e.g., redirect, show success message)
      } catch (error) {
        // Handle the error here (e.g., display error message to the user)
        console.error("Error creating post:", error);
        // Optionally, inform the user of the error
      }
    });
  }
}
