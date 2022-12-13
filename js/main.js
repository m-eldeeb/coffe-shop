// login form

let loginForm = document.querySelector(".login-from");

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.add("active");
});

document.querySelector("#close-login-form").addEventListener("click", () => {
  loginForm.classList.remove("active");
});

// navbar dropdown
let menu = document.querySelector("#menu-bar");
let nav = document.querySelector(".header nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
});

let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  loginForm.classList.remove("active");
  menu.classList.remove("fa-times");
  nav.classList.remove("active");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

});
