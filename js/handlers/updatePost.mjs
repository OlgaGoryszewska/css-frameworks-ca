import { updatePost } from "../api/auth/post/index.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#updatePost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      updatePost(post);
    });
  }
}
