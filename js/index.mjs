import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/auth/post/index.mjs";

const path = location.pathname;

if (path === "/login/login.html") {
  setLoginFormListener();
} else if (path === "/index.html") {
  setRegisterFormListener();
}

//post.createPost();
//post.updatePost();
//post.removePost();
//post.getPost();
post.getPosts().then(console.log);
