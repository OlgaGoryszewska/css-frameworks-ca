import { LOGIN_API_URL } from "../constants.mjs";

const method = "post";

export async function login(profile) {
  const loginURL = LOGIN_API_URL;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  console.log(result);
  console.log("Profile data to send:", profile);
}
