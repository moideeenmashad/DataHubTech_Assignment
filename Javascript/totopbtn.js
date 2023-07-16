
window.addEventListener("scroll", function() {
  var backToTopButton = document.getElementById("back-to-top-btn");
  if (window.pageYOffset > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
document.getElementById("back-to-top-btn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
