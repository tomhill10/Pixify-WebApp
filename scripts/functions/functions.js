function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 2000);
  return randomNumber;
}

function subPageChange() {
  const banner = document.getElementById("image-container");
  const subPage = document.getElementById("subPage-container");
  banner.style.display = "none";
  subPage.style.display = "grid";
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getRandomNumber, subPageChange, fetchData };
