import {
  fetchData,
  getRandomNumber,
  addOneToNumber,
  endOfPagesButtonDisable,
} from "../functions/functions.js";
async function subCard(inner) {
  let data = [];
  await subCardGet(data);
  async function subCardGet(inputArr) {
    for (let i = 0; i < 30; i++) {
      inputArr.push(
        await fetchData(`https://picsum.photos/id/${getRandomNumber()}/info`)
      );
    }
  }
  for (let i = 0; i < data.length; i++) {
    const subCard = document.createElement("div");
    subCard.className = `subCard`;
    subCard.id = `subCard`;

    subCard.innerHTML = `

        <div class="img-wrapper">
          <img src="${data[i].download_url}" alt="picture" />
        </div>
        <div class="subCard-info-row">
          <p>${data[i].author}</p>
          <div id="${i}" class="subCard-view-container">
          <p id="${i}" class="view-image">View Image </p>
          <i class="fa-solid fa-expand"></i>
          </div>
          </div>
          
          `;
    inner.appendChild(subCard);
  }
  const buttonOpen = document.getElementsByClassName(`view-image`);
  const subPage = document.getElementById("subPage-container");

  for (const buttons of buttonOpen) {
    buttons.addEventListener("click", function () {
      subPage.style.display = "none";
      let j = buttons.id;
      const div = document.createElement("div");
      div.className = "view-image-container";
      div.id = "image-container";
      div.innerHTML = `
      <h1 class="image-view-h1" id="image-view-author">Photographer: ${
        data[j].author
      }</h1>
      <img src="${
        data[j].download_url
      }" alt="Picture zoomed in" class="view-image-big" id="image-viewer-img"/>
      <p class="pageCount" id="pageCount">Page ${addOneToNumber(j)} of ${
        data.length
      }</p>
      <div class="image-row-wrapper">
      <button class="prev-image" id="buttonPrev">PREV</button>
      <button class="view-image-close-button" id="buttonClose">CLOSE</button>
      <button class="next-image" id="buttonNext">NEXT</button>
      </div>
      `;
      document.body.appendChild(div);
      endOfPagesButtonDisable(j, data);
      const img = document.getElementById("image-viewer-img");
      const page = document.getElementById("pageCount");
      const author = document.getElementById("image-view-author");

      const buttonNext = document.getElementById("buttonNext");
      const buttonPrev = document.getElementById("buttonPrev");
      buttonNext.addEventListener("click", function () {
        j++;
        img.src = data[j].download_url;
        page.textContent = `Page ${j + 1} of ${data.length}`;
        author.textContent = `Photographer: ${data[j].author}`;
        endOfPagesButtonDisable(j, data);
      });

      buttonPrev.addEventListener("click", function () {
        j--;
        img.src = data[j].download_url;
        page.textContent = `Page ${j + 1} of ${data.length}`;
        author.textContent = `Photographer: ${data[j].author}`;
        endOfPagesButtonDisable(j, data);
      });

      const buttonClose = document.getElementById("buttonClose");
      buttonClose.addEventListener("click", function () {
        const div = document.getElementById("image-container");
        subPage.style.display = "grid";
        document.body.removeChild(div);
      });
    });
  }
}

export { subCard };
