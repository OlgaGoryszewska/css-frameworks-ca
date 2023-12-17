import { register } from "../api/auth/register.mjs";
export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const profile = {};
    formData.forEach((value, key) => {
      profile[key] = value;
    });

    try {
      const result = await register(profile);
      document.querySelector("#message").innerHTML =
        '<div class="success">Registration successful</div>';
      console.log("Registration result:", result);
    } catch (error) {
      document.querySelector(
        "#message"
      ).innerHTML = `<div class="error">Registration failed: ${error.message}</div>`;
    }
  });
}
