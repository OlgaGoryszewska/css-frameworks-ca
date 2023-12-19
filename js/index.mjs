import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

const path = location.pathname;

if (path === "/login/login.html") {
  setLoginFormListener();
}
if (path === "/index.html") {
  setRegisterFormListener();
}
