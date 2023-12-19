import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { createPost } from "./api/auth/post/create.mjs";

import * as post from "./api/auth/post/index.mjs";
const path = location.pathname;

if (path === "/login/login.html") {
  setLoginFormListener();
}
if (path === "/index.html") {
  setRegisterFormListener();
}

createPost({
  title: "Example Post",
  body: "Also an example",
});
