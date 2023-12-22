import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/auth/post/index.mjs";

const path = location.pathname;

if (path === "/login/login.html") {
  setLoginFormListener();
} else if (path === "/index.html") {
  setRegisterFormListener();
} else if (path === "/post/create/index.html") {
  setCreatePostListener();
} else if (path === "/post/edit/index.html") {
  setEditPostListener();
}

async function testTemplates() {
  const posts = await postMethods.getPosts();
  const post = posts.pop();
  const container = document.querySelector("#post");
  templates.renderPostTemplates(posts, container);
}
testTemplates();
