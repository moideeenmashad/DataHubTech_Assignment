const carousel = document.getElementById("myCarousel");
const carouselButtons = Array.from(
  document.querySelectorAll(".carousel-button")
);
const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
carousel.addEventListener("slide.bs.carousel", (event) => {
  const activeIndex = parseInt(event.to);
  carouselButtons.forEach((button, index) => {
    if (index === activeIndex) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});

carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    carouselButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    carousel.carousel(index);
  });
});
