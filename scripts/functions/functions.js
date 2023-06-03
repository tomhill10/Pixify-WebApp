function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

function subPageChange() {
  const banner = document.getElementById("image-container");
  const subPage = document.getElementById("subPage-container");
  const aboutUs = document.getElementById("aboutUs-container");
  banner.style.display = "none";
  subPage.style.display = "grid";
  if (aboutUs.style.right == "0vw") {
    aboutUs.style.right = "-100vw";
  }
}

function aboutPageChange() {
  const aboutUs = document.getElementById("aboutUs-container");
  const banner = document.getElementById("image-container");
  const subPage = document.getElementById("subPage-container");
  aboutUs.style.right = ifOpen();
  function ifOpen() {
    if (aboutUs.style.right == "-100vw") {
      if (subPage.style.display == "grid") {
        subPage.style.display = "none";
      }
      return "0vw";
    } else {
      if (subPage.style.display == "none" && banner.style.display == "none") {
        subPage.style.display = "grid";
      }
      return "-100vw";
    }
  }
}

function aboutPageChangeButton() {
  const aboutUs = document.getElementById("aboutUs-container");
  const banner = document.getElementById("image-container");
  const subPage = document.getElementById("subPage-container");
  aboutUs.style.right = ifOpen();
  function ifOpen() {
    if (aboutUs.style.right == "-100vw") {
      return "0vw";
    } else {
      banner.style.display = "none";
      subPage.style.display = "grid";
      return "-100vw";
    }
  }
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

function addOneToNumber(input) {
  let string = input.toString();
  let number = Number(string);
  return number + 1;
}

function endOfPagesButtonDisable(input, data) {
  if (input == data.length - 1) {
    buttonNext.style.filter = "grayscale(1)";
    buttonNext.style.pointerEvents = "none";
  }
  if (input != 0) {
    buttonPrev.style.filter = "grayscale(0)";
    buttonPrev.style.pointerEvents = "auto";
  }
  if (input == 0) {
    buttonPrev.style.filter = "grayscale(1)";
    buttonPrev.style.pointerEvents = "none";
  }
  if (input != data.length - 1) {
    buttonNext.style.filter = "grayscale(0)";
    buttonNext.style.pointerEvents = "auto";
  }
}

export {
  getRandomNumber,
  subPageChange,
  fetchData,
  aboutPageChange,
  aboutPageChangeButton,
  addOneToNumber,
  endOfPagesButtonDisable,
};
