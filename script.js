const menuBtn = document.getElementById("menuBtn");
const links = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
    links.classList.toggle("active");
});