export default function navbar(element) {
  element.innerHTML = `
    <div class="particles-background" id="particlesBackground"></div>
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <a href="/">JA.</a>
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
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div class="mobile-nav-buttons">
            <button class="btn resume-btn-mobile" title="View Resume"><i class="fa-regular fa-file-lines"></i> Resume</button>
            <button class="toggle-theme-mobile" title="Toggle Theme">
              <i class="fa-solid fa-moon"></i>
            </button>
          </div>
        </nav>
        <div class="right-section-header">
          <button class="btn resume-btn" title="View Resume"><i class="fa-regular fa-file-lines"></i></button>
          <button class="toggle-theme" title="Toggle Theme">
            <i class="fa-solid fa-moon"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- Resume Modal -->
    <div class="resume-modal" id="resumeModal">
      <div class="resume-modal-content">
        <div class="resume-modal-header">
          <a href="/resume.pdf" download="Jabby_Alicante_Resume.pdf" class="download-btn">
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

  const menuToggle = element.querySelector('.menu-toggle');
  const nav = element.querySelector('.nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.querySelector('.hamburger').classList.toggle('active');
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
  const themeIcon = themeToggle.querySelector('i');
  
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme, themeIcon);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme, themeIcon);
    });
  }

  function updateThemeIcon(theme, icon) {
    if (theme === 'dark') {
      icon.className = 'fa-regular fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  }

  const resumeBtnMobile = element.querySelector('.resume-btn-mobile');
  if (resumeBtnMobile) {
    resumeBtnMobile.addEventListener('click', () => {
      resumeModal.classList.add('active');
      nav.classList.remove('active');
      menuToggle.querySelector('.hamburger').classList.remove('active');
    });
  }

  const themeToggleMobile = element.querySelector('.toggle-theme-mobile');
  if (themeToggleMobile) {
    const themeIconMobile = themeToggleMobile.querySelector('i');
    updateThemeIcon(currentTheme, themeIconMobile);
    
    themeToggleMobile.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme, themeIconMobile);
      updateThemeIcon(newTheme, themeIcon);
    });
  }

  function createParticles() {
    const particlesContainer = element.querySelector('#particlesBackground');
    if (!particlesContainer) return;

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.textContent = Math.random() > 0.5 ? '1' : '0';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  function createBodyParticles() {
    const bodyParticlesContainer = document.createElement('div');
    bodyParticlesContainer.id = 'bodyParticlesBackground';
    bodyParticlesContainer.className = 'body-particles-background';
    document.body.insertBefore(bodyParticlesContainer, document.body.firstChild);

    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.textContent = Math.random() > 0.5 ? '1' : '0';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 30 + 's';
      particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
      bodyParticlesContainer.appendChild(particle);
    }
  }

  createParticles();
  createBodyParticles();
}
