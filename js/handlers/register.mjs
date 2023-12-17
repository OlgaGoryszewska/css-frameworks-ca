import { register } from "../api/auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    console.log(profile);

    try {
      await register(profile);
      document.querySelector("#message").innerHTML =
        '<div class= "success"> Registration successful</div>';
    } catch (error) {
      document.querySelector(
        "#message"
      ).innerHTML = `<div class="error">${error.message}</div>`;
    }
  });
}
