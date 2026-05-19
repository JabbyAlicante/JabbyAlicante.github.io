export default function navbar(element) {
  element.innerHTML = `
    <div class="particles-background" id="particlesBackground"></div>
    <header class="header">
      <div class="header-container">

        <div class="logo">
          <a href="/" class="nav-home">JA.</a>
        </div>

        <button class="menu-toggle">
          <span class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav class="nav">
          <ul class="nav-list">
            <li><a href="/" class="nav-home">Home</a></li>
            <li><a href="/#skills" class="skills-link">Skills</a></li>

            <!-- FIXED CLASS NAME MATCH -->
            <li><a href="/projects" class="projects-link">Projects</a></li>

            <li><a href="/contact" class="contact-link">Contact</a></li>
          </ul>

          <div class="mobile-nav-buttons">
            <button class="btn resume-btn-mobile" title="View Resume">
              <i class="fa-regular fa-file-lines"></i> Resume
            </button>

            <!-- <button class="toggle-theme-mobile" title="Toggle Theme">
              <i class="fa-solid fa-moon"></i>
            </button> -->
          </div>
        </nav>

        <div class="right-section-header">
          <button class="btn resume-btn" title="View Resume">
            <i class="fa-regular fa-file-lines"></i>
          </button>

           <!--<button class="toggle-theme" title="Toggle Theme">
            <i class="fa-solid fa-moon"></i>
          </button> -->
        </div>

      </div>
    </header>

    <!-- Resume Modal -->
    <div class="resume-modal" id="resumeModal">
      <div class="resume-modal-content">

        <div class="resume-modal-header">
          <a href="/resume.pdf" download class="download-btn">
            <i class="fa-solid fa-download"></i> Download PDF
          </a>
          <button class="resume-close-btn">&times;</button>
        </div>

        <iframe 
          src="/resume.pdf" 
          class="resume-pdf-viewer"
          type="application/pdf"
          frameborder="0">
        </iframe>

      </div>
    </div>
  `;

  const header = element.querySelector('.header');

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  const menuToggle = element.querySelector('.menu-toggle');
  const nav = element.querySelector('.nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');

      menuToggle
        .querySelector('.hamburger')
        .classList.toggle('active');
    });
  }

  // close toggle phone menu
  const navLinks = element.querySelectorAll('.nav-list a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');

      menuToggle
        ?.querySelector('.hamburger')
        .classList.remove('active');
    });
  });

  const homeLink = element.querySelector('.nav-home');
  const projectLink = element.querySelector('.projects-link'); 
  const contactLink = element.querySelector('.contact-link');
  const skillsLink = element.querySelector('.skills-link');

  function navigate(path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('/');
    });
  }

  if (skillsLink) {
    skillsLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('/#skills');
    });
  }

  if (projectLink) {
    projectLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('/projects');
    });
  }

  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('/contact');
    });
  }

  const resumeBtn = element.querySelector('.resume-btn');
  const resumeModal = element.querySelector('#resumeModal');
  const closeBtn = element.querySelector('.resume-close-btn');

  if (resumeBtn && resumeModal) {
    resumeBtn.addEventListener('click', () => {
      resumeModal.classList.add('active');
    });
  }

  if (closeBtn && resumeModal) {
    closeBtn.addEventListener('click', () => {
      resumeModal.classList.remove('active');
    });
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        resumeModal.classList.remove('active');
      }
    });
  }


  const themeToggle = element.querySelector('.toggle-theme');
  const themeIcon = themeToggle?.querySelector('i');

  if (themeToggle && themeIcon) {
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme, themeIcon);

    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'light' ? 'dark' : 'light';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme, themeIcon);
    });
  }

  function updateThemeIcon(theme, icon) {
    icon.className =
      theme === 'dark'
        ? 'fa-regular fa-sun'
        : 'fa-solid fa-moon';
  }

  function createParticles() {
    const container = element.querySelector('#particlesBackground');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.textContent = Math.random() > 0.5 ? '1' : '0';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      container.appendChild(particle);
    }
  }

  function createBodyParticles() {
    const container = document.createElement('div');
    container.id = 'bodyParticlesBackground';
    container.className = 'body-particles-background';
    document.body.insertBefore(container, document.body.firstChild);

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.textContent = Math.random() > 0.5 ? '1' : '0';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 30 + 's';
      particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
      container.appendChild(particle);
    }
  }

  createParticles();
  createBodyParticles();
}