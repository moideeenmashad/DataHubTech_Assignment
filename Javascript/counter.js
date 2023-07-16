var counters = [
  { id: "counter1", initialValue: 0, targetValue: 38, animated: false },
  { id: "counter2", initialValue: 0, targetValue: 965, animated: false },
  { id: "counter3", initialValue: 0, targetValue: 1021, animated: false },
  { id: "counter4", initialValue: 0, targetValue: 12, animated: false },
];

function animateCounter(counterId, initialValue, targetValue) {
  var counterElement = document.getElementById(counterId);
  var increment = Math.ceil((targetValue - initialValue) / 150);

  var interval = setInterval(function () {
    if (initialValue >= targetValue) {
      clearInterval(interval);
    } else {
      initialValue += increment;
      counterElement.textContent = initialValue;
    }
  }, 20);
}

function checkVisibility() {
  var counter1Element = document.getElementById("product_count");
  var rect = counter1Element.getBoundingClientRect();

  if (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    counters.forEach(function (counter) {
      if (!counter.animated) {
        counter.animated = true;
        animateCounter(counter.id, counter.initialValue, counter.targetValue);
      }
    });
    window.removeEventListener("scroll", checkVisibility);
  }
}
window.addEventListener("scroll", checkVisibility);
