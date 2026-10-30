// Menu mobile : ouvre / ferme le menu quand on clique sur ☰
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Ferme le menu quand on clique sur un lien
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});

// Affiche l'année en cours dans le footer
document.getElementById("year").textContent = new Date().getFullYear();
