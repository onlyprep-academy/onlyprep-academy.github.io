/* ======================================================
   SCRIPT.JS – Onlyprep Academy Landing Page Interactivity
====================================================== */

/* -------------------------------
   HEADER SHRINK ON SCROLL
---------------------------------- */
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

/* -------------------------------
   MOBILE MENU TOGGLE
---------------------------------- */
const menuToggle = document.querySelector("#mobile-menu");
const navLinks = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});

/* -------------------------------
   ACTIVE NAV LINK ON SCROLL
---------------------------------- */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});

/* -------------------------------
   TESTIMONIAL SLIDER
---------------------------------- */
let testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");
}

document.querySelector("#prevBtn")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

document.querySelector("#nextBtn")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

// Auto-slide every 6 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 6000);

/* -------------------------------
   SCROLL REVEAL ANIMATIONS
---------------------------------- */
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    distance: "50px",
    duration: 1000,
    easing: "ease-out",
    reset: false
  });

  sr.reveal(".hero-content", { origin: "top", delay: 200 });
  sr.reveal(".course-card", { origin: "bottom", interval: 200 });
  sr.reveal(".why-card", { origin: "left", interval: 150 });
  sr.reveal(".testimonial-slider", { origin: "bottom", delay: 200 });
  sr.reveal(".about-text", { origin: "left", delay: 200 });
  sr.reveal(".about-image", { origin: "right", delay: 300 });
  sr.reveal(".contact-form", { origin: "bottom", delay: 200 });
}

/* -------------------------------
   HERO PARTICLES CREATION
---------------------------------- */
const hero = document.querySelector(".hero");
const numParticles = 30;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement("span");
  particle.classList.add("particle");
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.width = `${Math.random() * 4 + 2}px`;
  particle.style.height = particle.style.width;
  particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
  hero.appendChild(particle);
}

/* -------------------------------
   HERO PARTICLE PARALLAX EFFECT
---------------------------------- */
document.addEventListener("mousemove", (e) => {
  const particles = document.querySelectorAll(".hero .particle");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  particles.forEach((particle, index) => {
    const moveX = (x - 0.5) * (index % 10 + 1) * 10;
    const moveY = (y - 0.5) * (index % 10 + 1) * 10;
    particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

/* -------------------------------
   SLIDE-IN CARDS ON SCROLL
---------------------------------- */
const cards = document.querySelectorAll(".course-card, .why-card");

function animateCards() {
  const triggerBottom = window.innerHeight * 0.9;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show-card");
    }
  });
}

window.addEventListener("scroll", animateCards);
animateCards(); // Initial check
