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

function darkModeToggle(mode) {
  const r = document.querySelector(":root");
  const c = document.getElementsByClassName("subCard");
  const f = document.getElementById("form-container");
  console.log(mode);
  if (mode == 1) {
    r.style.setProperty("--color-main", "#000000");
    r.style.setProperty("--color-secondary", "#7bffe9");
    r.style.setProperty("--color-text-main", "#000000");
    r.style.setProperty("--color-text-secondary", "#ffffff");
    r.style.setProperty("--color-background", "#2a3b49");
    r.style.setProperty("--color-background-secondary", "#2a3b49");
    r.style.setProperty("--color-background-toggle", "#2a3b49");
    for (const cc of c) {
      cc.style.boxShadow = "5px 5px 5px 1px rgb(224, 224, 224)";
    }
    console.log(mode);
    return 1;
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
    console.log(mode);
    return 0;
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
  darkModeToggle,
};
