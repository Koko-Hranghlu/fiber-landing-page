const hamburger_btn = document.querySelector(".hamburger-icon")
const nav_links = document.querySelector(".main-links")
hamburger_btn.addEventListener("click", () => nav_links.classList.toggle('active'))
