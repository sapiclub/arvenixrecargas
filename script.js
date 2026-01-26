const slides = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let current = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'prev', 'next');

    if (index === current) {
      slide.classList.add('active');
    } else if (index === (current - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    } else if (index === (current + 1) % slides.length) {
      slide.classList.add('next');
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
}

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

let auto = setInterval(nextSlide, 4000);

document.querySelector('.carousel-container').addEventListener('mouseenter', () => clearInterval(auto));
document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
  auto = setInterval(nextSlide, 4000);
});

updateSlides();

const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    const isOpen = answer.style.display === "block";

    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = "none");

    answer.style.display = isOpen ? "none" : "block";
  });
});
