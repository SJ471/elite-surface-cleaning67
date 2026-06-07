document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  });
});

document.querySelectorAll(".compare").forEach((compare) => {
  const slider = compare.querySelector("input[type='range']");
  const updateSlider = () => compare.style.setProperty("--position", `${slider.value}%`);
  slider.addEventListener("input", updateSlider);
  updateSlider();
});

const buttons = document.querySelectorAll(".result-btn");
const comparisons = document.querySelectorAll(".comparison");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.index);

    buttons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    comparisons.forEach((comparison) => comparison.classList.remove("active"));

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    comparisons[index].classList.add("active");
  });
});
