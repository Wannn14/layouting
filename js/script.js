window.addEventListener("DOMContentLoaded", (event) => {
  const burgerIcon = document.querySelector(".burger");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay-bg");
  const closeButton = document.querySelector(".close-button");
  burgerIcon.addEventListener("click", () => {
    sidebar.classList.add("menu-active");
    overlay.classList.add("menu-active");
  });

  closeButton.addEventListener("click", () => {
    sidebar.classList.remove("menu-active");
    overlay.classList.remove("menu-active");
  });
});
