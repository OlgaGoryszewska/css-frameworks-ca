import { REGISTER_API_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile, action, method) {
  const registerURL = REGISTER_API_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: { "Content-type": "application/json" },
    method,
    body,
  });

  const result = await response.json();
  console.log(result);
}
