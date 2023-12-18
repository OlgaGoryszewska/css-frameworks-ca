import { register } from "../api/auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", async (event) => {
    // Mark the function as async
    event.preventDefault();

    const formData = new FormData(event.target);
    let profile = Object.fromEntries(formData.entries());

    console.log("Profile data to send:", profile);

    try {
      const result = await register(profile); // Await the result of register
      console.log("Registration result:", result);
    } catch (error) {
      // Assuming the error contains a response object with a JSON body
      if (error.response) {
        const errorResult = await error.response.json();
        console.log("Error details:", errorResult.errors);
      } else {
        console.log("Error during registration:", error);
      }
    }
  });
}
