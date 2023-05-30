function header() {
  const header = document.createElement("header");
  header.className = `header-main`;
  header.innerHTML = `<h1>
     <a class="header-logo" href="http://">
       PIXIFY
     </a>
   </h1>
   <nav>
     <a href="http://">2023 Submissions</a>
     <a href="http://">About</a>
   </nav>
`;
  body.appendChild(header);
}

export { header };
