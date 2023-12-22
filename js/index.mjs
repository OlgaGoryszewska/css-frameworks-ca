import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/auth/post/index.mjs";

const path = location.pathname;

if (path === "/login/login.html") {
  listeners.setLoginFormListener();
} else if (path === "/index.html") {
  listeners.setRegisterFormListener();
} else if (path === "/post/edit/index.html") {
  listeners.setEditPostListener();
} else if (path === "/post/create/index.html") {
  listeners.setCreatePostListener();
}
