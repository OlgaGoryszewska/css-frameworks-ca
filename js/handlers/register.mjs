import { register } from "../api/auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    let profile = Object.fromEntries(formData.entries());

    console.log("Profile data to send:", profile);
    register(profile);
  });
}
