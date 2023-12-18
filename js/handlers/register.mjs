import { register } from "../api/auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const profile = Object.fromEntries(formData.entries());

    try {
      const result = await register(profile);
      console.log("Registration result:", result);
    } catch (error) {
      if (error.response) {
        const errorResult = await error.response.json();
        console.log("Error details:", errorResult.errors);
      } else {
        console.log("Error during registration:", error);
      }
    }
  });
}
