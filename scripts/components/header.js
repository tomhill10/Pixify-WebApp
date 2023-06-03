import {
  aboutPageChange,
  aboutPageChangeButton,
  darkModeToggle,
} from "../functions/functions.js";
function header() {
  const header = document.createElement("header");
  header.className = `header-main`;
  header.innerHTML = `<h1>
     <a class="header-logo" href=".//">
       PIXIFY
     </a>
   </h1>
   <nav>
     <a class="subPage">2023 Submissions</a>
     <a id="aboutButton" class="aboutButton">About</a>
     <i id="darkModeButton" class="fa-solid fa-circle-half-stroke"></i>
   </nav>
`;
  body.appendChild(header);
  const about = document.getElementsByClassName("aboutButton");
  for (const button of about) {
    button.addEventListener("click", aboutPageChange);
  }
  const aboutSubmitbutton = document.getElementById("aboutSubmitButton");
  aboutSubmitbutton.addEventListener("click", aboutPageChangeButton);
  const darkModeButton = document.getElementById("darkModeButton");
  let mode = false;
  darkModeButton.addEventListener("click", function () {
    const r = document.querySelector(":root");
    const c = document.getElementsByClassName("subCard");
    const f = document.getElementById("form-container");
    if (mode == true) {
      r.style.setProperty("--color-main", "#000000");
      r.style.setProperty("--color-secondary", "#7bffe9");
      r.style.setProperty("--color-text-main", "#000000");
      r.style.setProperty("--color-text-secondary", "#ffffff");
      r.style.setProperty("--color-background", "#2a3b49");
      r.style.setProperty("--color-background-secondary", "#2a3b49");
      r.style.setProperty("--color-background-toggle", "whitesmoke");
      for (const cc of c) {
        cc.style.boxShadow = "5px 5px 5px 1px rgb(224, 224, 224)";
      }
      mode = false;
    } else {
      r.style.setProperty("--color-main", "#ffffff");
      r.style.setProperty("--color-secondary", "#7bffe9");
      r.style.setProperty("--color-text-main", "#ffffff");
      r.style.setProperty("--color-text-secondary", "#000000");
      r.style.setProperty("--color-background", "#2a3b49");
      r.style.setProperty("--color-background-secondary", "#2a3b49");
      r.style.setProperty("--color-background-toggle", "#2a3b49");
      for (const cc of c) {
        cc.style.boxShadow = "5px 5px 1px 1px rgb(0, 0, 0)";
      }
      mode = true;
    }
  });
}

export { header };
