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
            <p id="view_image">View Image</p>
          </div>
       
`;
  inner.appendChild(subCard);
  function viewImage() {
    const viewimg = document.getElementById("view_image");
  }
}

export { subCard };
