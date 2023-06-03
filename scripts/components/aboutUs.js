function aboutUsPage() {
  const aboutUsPage = document.createElement("div");
  aboutUsPage.className = `aboutUs-container`;
  aboutUsPage.id = `aboutUs-container`;
  aboutUsPage.style.right = "-100vw";
  aboutUsPage.innerHTML = `
  <div class="aboutUs-header-banner">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Pixify, the ultimate destination for photography
          enthusiasts! We are a community of passionate photographers who
          believe in the power of capturing life's moments and sharing them with
          the world.
        </p>
      </div>
      <div class="aboutUs-text-wrapper">
        <p>
          Our mission is to provide a platform for photographers to showcase
          their work, connect with like-minded individuals, and be recognised
          for their talent. That's why we created Pixify - a photography contest
          where photographers from all walks of life can enter their best shots
          and have a chance to win amazing prizes.
        </p>
        <p>
          At Pixify, we believe that photography is not just a hobby but an art
          form that can tell a story, evoke emotions, and leave a lasting
          impression. Whether you're a professional photographer or just
          starting out, we welcome you to join us on this journey and share your
          unique perspective with the world.
        </p>
        <p>
          So what are you waiting for? Enter our photography contest today,
          connect with other photographers, and take your passion to the next
          level with Pixify. We can't wait to see what you have in store!
        </p>
        <p>DEADLINE: 17TH FEBRUARY 2023</p>
        <button>
          <img
            src="./resources/svg/SUBMIT NOW.svg"
            alt="submit now"
            id="aboutSubmitButton"
          />
        </button>
      </div>
      <div class="aboutUs-image-wrapper">
        <img
          src="./resources/images/erik-mclean-2Wv9VnwzeeI-unsplash 1.png"
          alt=""
        />
      </div>

`;
  body.appendChild(aboutUsPage);
}

export { aboutUsPage };
