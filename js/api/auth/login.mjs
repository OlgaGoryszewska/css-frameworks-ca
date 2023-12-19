import { LOGIN_API_URL } from "../constants.mjs";
import * as storage from "../../handlers/storage/index.mjs";

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

  storage.save("token", result.accessToken);

  storage.save("profile", result);

  alert("Congratulations! You are now logged in");
}
