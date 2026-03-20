window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slogan-slide");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3800);
});

// 입양스토리
const storySlides = document.querySelectorAll(".story-slide");
const storyDots = document.querySelectorAll(".story-dot");

let currentStory = 0;

function showStory(index) {
  storySlides.forEach((slide) => slide.classList.remove("active"));
  storyDots.forEach((dot) => dot.classList.remove("active"));

  storySlides[index].classList.add("active");
  storyDots[index].classList.add("active");

  currentStory = index;
}

setInterval(() => {
  const next = (currentStory + 1) % storySlides.length;
  showStory(next);
}, 3500);
