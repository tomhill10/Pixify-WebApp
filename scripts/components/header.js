function header() {
  const header = document.createElement("header");
  header.className = `header-main`;
  header.innerHTML = `<h1>
     <a class="header-logo" href=".//">
       PIXIFY
     </a>
   </h1>
   <nav>
     <a class="subPage">2023 Submissions</a>
     <a>About</a>
   </nav>
`;
  body.appendChild(header);
}

export { header };
