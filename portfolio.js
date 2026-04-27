function playMusic() {
    document.getElementById("music").play();
  }

  const navbar = document.getElementById("header-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});