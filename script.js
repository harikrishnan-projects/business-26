// hamburger menu //
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});







// DIFFERENT ANIMATION FOR EACH SECTION

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document
  .querySelectorAll(".fade, .slide, .zoom, .rotate")
  .forEach(el => observer.observe(el));






// hero content move //
const heroes = document.querySelectorAll(".hero-container");
const heroSection = document.querySelector(".hero");

let currentHero = 0;

setInterval(() => {
  // remove active content
  heroes[currentHero].classList.remove("active");

  // remove old background
  heroSection.classList.remove(`hero-bg-${currentHero + 1}`);

  // move index
  currentHero = (currentHero + 1) % heroes.length;

  // add active content
  heroes[currentHero].classList.add("active");

  // add new background
  heroSection.classList.add(`hero-bg-${currentHero + 1}`);

}, 4000);






const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.slide-left, .slide-right, .about-content').forEach(el => {
  observer1.observe(el);
});





// testimonial //

  const track = document.querySelector(".testi-track");
  const items = document.querySelectorAll(".testi-item");
  let index = 0;

  function slideTestimonial() {
    track.style.transform = `translateX(-${index * 100}%)`;
    index = (index + 1) % items.length;
  }

  setInterval(slideTestimonial, 4000);

