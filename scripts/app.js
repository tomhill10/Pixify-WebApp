import { header } from "./components/header.js";
import { banner } from "./components/banner-main.js";
const body = document.getElementById("body");
const button = document.getElementById("submitButton");

function app() {
  const app = document.createElement("div");
  app.className = `app-main`;
  app.innerHTML = header();
  app.innerHTML = banner();
  body.appendChild(app);
}

app();
