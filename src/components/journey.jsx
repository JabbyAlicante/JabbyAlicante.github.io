export default function journey(element) {
  element.innerHTML = `
    <div class="journey-content">

      <div class="title-journey">
        <h2>// My Journey</h2>
      </div>

      <div class="timeline">

        <div class="timeline-item left">
          <div class="timeline-content">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>College of Mary Immaculate</p>
            <span>2022 - 2026</span>
            <p class="description">Graduated with a degree in Computer Science, where I developed strong technical skills and gained in-depth knowledge relevant to my career. During my studies, I worked on various projects focused on software and web development, applying both theoretical and practical concepts.</p>
            <span class="important">Relevant Coursework:</span>
            <p class="description">Data Structures, Object-Oriented Programming, Programming, Algorithms, Information Security, Natural Language Processing, Intelligent Systems</p>
          </div>
          <div class="timeline-dot"></div>
        </div>

        <div class="timeline-item right">
          <div class="timeline-content">
            <h3>Software Developer Intern</h3>
            <p>JCAS Logistics</p>
            <span>April 2025 - May 2025</span>
            <p class="description">Contributed to the development of an HR module and Driver’s Companion App, focusing on UI/UX design, frontend development, and backend logic to improve user experience and navigation. Designed wireframes and interfaces using Balsamiq and FlutterFlow, enhancing usability and reducing complexity. Integrated frontend with Supabase backend.</p>
            <span class="important">Tech Stack:</span>
            <p class="description">FlutterFlow, Balsamiq, Supabase</p>
          </div>
          <div class="timeline-dot"></div>
        </div>

      </div>
    </div>
  `;
  const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

items.forEach((item) => observer.observe(item));
}