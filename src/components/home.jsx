import about from "./about.jsx";
import journey from "./journey.jsx";
import skills from "./skills.jsx";
export default function home(element) {
  element.innerHTML = `
    <section id="home" class="home">
      <div class="home-content">
        <div class="home-open-content">
          <div class="circle1"></div>
          <div class="open-title">
            <p class="open-title-line">Open for new projects</p>
          </div>
        </div>
        <div class="title1">
          <h1>Hi, It's me<span class="name">Jabby Alicante</span></h1>
        </div>
        <div class="title2">
          <h2>Aspiring Junior <span class="role"></span></h2>
        </div>
        <div class="title3">
          <p>I currently focused on expanding my experience in both backend and frontend development and exploring new tools and technologies.</p>
        </div>
        <div class="scroll-indicator">
          <span class="scroll-text">Scroll down</span>
          <div class="scroll-arrow">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </section>
    <section class="about-section"></section>
    <section class="journey-section"></section>
    <section id="skills" class="skills-section"></section>
  `;
  const roles = [
    "Software Developer",
    "Web Developer",
    "Application Developer"
  ];

  const roleElement = document.querySelector(".role");

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    roleElement.textContent = currentRole.substring(0, charIndex);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 3000; 
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 800;
    }

    setTimeout(type, speed);
  }

  type();
  const aboutContainer = document.querySelector(".about-section");
  about(aboutContainer);
  
  const scrollBtn = document.querySelector(".scroll-indicator");
  const aboutSection = document.querySelector(".about-section");
  // const journeySection = document.querySelector(".journey-section");

  scrollBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  });

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const triggerPoint = window.innerHeight / 2;

    if (scrollY > triggerPoint) {
      aboutSection.classList.add("show");
    } else {
      aboutSection.classList.remove("show");
    }
  });

  if (window.location.hash === "#skills") {
    const el = document.getElementById("skills");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }

  const homeContent = document.querySelector(".home-content");

  window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight / 2;

    if (window.scrollY > triggerPoint) {
      homeContent.classList.add("fade-out");
    } else {
      homeContent.classList.remove("fade-out");
    }
  });

  const journeyContainer = document.querySelector(".journey-section");
  journey(journeyContainer);
  const skillsContainer = document.querySelector(".skills-section");
  skills(skillsContainer);
}
