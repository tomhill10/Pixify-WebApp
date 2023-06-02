import { subCard } from "./subCard.js";
import { getRandomNumber } from "../functions/functions.js";
function subPage(data) {
  console.log(data);
  const subPage = document.createElement("div");
  subPage.className = `subPage-container`;
  subPage.id = `subPage-container`;
  subPage.innerHTML = `
  <h1>2023 Submissions</h1>
     <div class="submissions-container" id="submissions-container">
      </div>
`;
  body.appendChild(subPage);
  const subContainer = document.getElementById("submissions-container");
  subCard(subContainer);
}

export { subPage };
