const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  // populates web browser with first image
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
  // after 5 seconds, call nextSlide function
}

function showSlide(index) {
  slides.forEach((slide) => {
    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    }
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");
  //
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex++;
  showSlide(slideIndex);
}
