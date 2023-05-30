import { header } from "./components/header.js";
import { banner } from "./components/banner-main.js";
import { subPage } from "./components/subPage.js";
import { form } from "./components/form.js";
import { subPageChange, fetchData } from "./functions/functions.js";

const body = document.getElementById("body");
const html = document.getElementById("html");

const loadSubPage = document.getElementsByClassName("subPage");
let pictures = await fetchData("https://picsum.photos/v2/list");
console.log(pictures);

function app() {
  const app = document.createElement("div");
  app.className = `app-main`;
  app.innerHTML = header();
  app.innerHTML = banner();
  app.innerHTML = subPage(pictures);
  app.innerHTML = form();
  body.appendChild(app);
}

app();

for (const button of loadSubPage) {
  button.addEventListener("click", subPageChange);
}

window.addEventListener("scroll", () => {
  const formContainer = document.getElementById("form-container");
  let scroll = `${document.documentElement.scrollTop}px`;
  formContainer.style.top = scroll;
});

body.addEventListener("scroll", (event) => {
  const { scrollHeight, scrollTop, clientHeight } = event.target;

  if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
    console.log("scrolled");
  }
});

// window.addEventListener("scroll", (event) => {
//   console.log(window.innerHeight);
// });
