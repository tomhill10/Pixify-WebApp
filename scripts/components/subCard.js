import { fetchData } from "../functions/functions.js";
async function subCard(index, inner) {
  let data = await fetchData(`https://picsum.photos/id/${index}/info`);

  const subCard = document.createElement("div");
  subCard.className = `subCard`;
  subCard.innerHTML = `
  
          <div class="img-wrapper">
            <img src="${data.download_url}" alt="picture" />
          </div>
          <div class="subCard-info-row">
            <p>${data.author}</p>
            <div class="subCard-view-container">
            <p id="view_image${index}">View Image </p>
            <i class="fa-solid fa-expand"></i>
            </div>
          </div>
       
`;
  inner.appendChild(subCard);

  const buttonOpen = document.getElementById(`view_image${index}`);
  buttonOpen.addEventListener("click", function () {
    console.log("button press");
    const div = document.createElement("div");
    div.className = "view-image-container";
    div.id = "image-container";
    div.innerHTML = `
          <button class="view-image-close-button" id="buttonClose">CLOSE X</button>
          <img src="${data.download_url}" alt="Picture zoomed in" class="view-image-big" />
        `;
    document.body.appendChild(div);

    const buttonClose = document.getElementById("buttonClose");
    buttonClose.addEventListener("click", function () {
      console.log("button press");
      const div = document.getElementById("image-container");
      document.body.removeChild(div);
    });
  });
}

export { subCard };
