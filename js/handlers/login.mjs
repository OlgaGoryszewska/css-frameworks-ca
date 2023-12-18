import { login } from "../api/auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const profile = Object.fromEntries(formData.entries());

    try {
      const result = await login(profile);
      console.log("Login result:", result);
    } catch (error) {
      if (error.response) {
        const errorResult = await error.response.json();
        console.log("Error details:", errorResult.errors);
      } else {
        console.log("Error during login:", error);
      }
    }
  });
}
