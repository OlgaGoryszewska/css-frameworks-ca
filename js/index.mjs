import { setRegisterFormListener } from "./handlers/register.mjs";

function router() {
  const pathname = window.location.pathname;

  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      setRegisterFormListener();
      break;
  }
}

router();
