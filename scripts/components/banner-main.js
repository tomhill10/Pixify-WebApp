import { getRandomNumber } from "../functions/functions.js";

function banner() {
  const banner = document.createElement("div");
  banner.className = `image-container`;
  banner.id = `image-container`;
  banner.innerHTML = ` <img src="https://picsum.photos/seed/${getRandomNumber()}/1920/1080" alt="picture" />
     <div class="pop-up">
       <img
         src="./svg/Join our photography contest and showcase your talent to the world! Immerse yourself in a community of photographers, where creativity and passion come together. Share your best shots, be inspired by others, and have a chance to win amazing prizes. En.svg"
         alt=""
       />
     </div>
     <button class="submitButton subPage" id="submitButton">
       <img src="./svg/SUBMIT NOW.svg" alt="submit" />
     </button>
`;
  body.appendChild(banner);
}

export { banner };
