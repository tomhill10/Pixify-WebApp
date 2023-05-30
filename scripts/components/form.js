function form() {
  const subPage = document.getElementById("subPage-container");
  const form = document.createElement("div");
  form.className = `form-container`;
  form.id = `form-container`;
  form.innerHTML = `
  <h1>SUBMIT YOUR WORK</h1>
        <form class="form" action="submit">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="text" name="title" placeholder="Title of Your Entry" />
          <input type="url" name="url1" id="url1" placeholder="Image URL One" />
          <input type="url" name="url2" id="url2" placeholder="Image URL Two" />
          <input
            type="url"
            name="url3"
            id="url3"
            placeholder="Image URL Three"
          />
          <input
            type="url"
            name="url4"
            id="url4"
            placeholder="Image URL Four"
          />
          <input
            type="url"
            name="url5"
            id="url5"
            placeholder="Image URL Five"
          />
          <button type="submit">SUBMIT</button>
        </form>
`;
  subPage.appendChild(form);
}

export { form };
