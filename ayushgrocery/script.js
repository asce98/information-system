const header = document.querySelector(".main-header");
const sectionOne = document.querySelector(".sub-header");
const point = header.getBoundingClientRect();
window.addEventListener("scroll", () => {
  if (window.scrollY > point.top) sectionOne.classList.add("sticky");
  else sectionOne.classList.remove("sticky");
});
