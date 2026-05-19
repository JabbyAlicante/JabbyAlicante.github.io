import img1 from "../assets/handigo.png";
import img2 from "../assets/thetector.png";
import img3 from "../assets/theunknown.png";
import img4 from "../assets/tristrike.png";
import img5 from "../assets/khloris.png";
import img6 from  "../assets/thewall.png";

export default function projects(element) {
  element.innerHTML = `
    <section class="projects-section">
      
      <div class="title-projects">
        <span class="project-label">// projects</span>
        <h2>Featured <span>Projects</span></h2>
      </div>

      <div class="masonry">

        <div class="card">
          <img src="${img1}" alt="Hand Gesture Input App" />
          
          <div class="card-content">
            <h3>Handigo App</h3>

            <p>
              Helped develop a thesis-based software application that uses hand 
              gestures as an alternative input method for computer interaction 
              and accessibility.
            </p>

            <div class="tech-stack">
              <span>Python</span>
              <span>Roboflow</span>
              <span>MediaPipe</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Rust</span>
            </div>
            <div class="project-links">
              <a 
                href="https://github.com/Handigo-io/Handigo.git"
                target="_blank"
                class="view-code"
              >
                View Code >>
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="${img2}" alt="NLP Text Processing System" />
          
          <div class="card-content">
            <h3>The Tector</h3>

            <p>
              Designed and helped develop a web-based NLP text processing system 
              for analyzing, processing, and transforming textual data through 
              natural language processing techniques.
            </p>

            <div class="tech-stack">
              <span>Python</span>
              <span>Flask</span>
              <span>NLP</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div class="project-links">
              <a 
                href="https://github.com/JabbyAlicante/The-Tector.git"
                target="_blank"
                class="view-code"
              >
                View Code >>
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="${img3}" alt="Unsolved Cases Search Engine" />
          
          <div class="card-content">
            <h3>The Unknown</h3>

            <p>
              Helped design and develop a web-based search engine for unsolved 
              cases as a college project, including frontend and backend 
              implementation for case searching and data management.
            </p>

            <div class="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>MongoDB</span>
              <span>Docker</span>
            </div>
            <div class="project-links">
              <a 
                href="https://github.com/college-of-mary-immaculate/The-Unknown.git"
                target="_blank"
                class="view-code"
              >
                View Code >>
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="${img4}" alt="Real-Time Betting Game" />
          
          <div class="card-content">
            <h3>TriStrike</h3>

            <p>
              Helped develop a real-time betting game with live game updates, 
              interactive gameplay, and real-time synchronization between 
              users and the server.
            </p>

            <div class="tech-stack">
              <span>Node.js</span>
              <span>WebSockets</span>
              <span>JavaScript</span>
              <span>MySQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Docker</span>
            </div>
            <div class="project-links">
              <a 
                href="https://github.com/JabbyAlicante/TriStrike.git"
                target="_blank"
                class="view-code"
              >
                View Code >>
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="${img5}" alt="Flower Shop Website" />
          
          <div class="card-content">
            <h3>Khloris</h3>

            <p>
              Designed and developed the UI for a flower shop website as a 
              college project, focusing on responsive layouts, modern design, 
              and user-friendly navigation.
            </p>

            <div class="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Figma</span>
            </div>
            <div class="project-links">
              <a 
                href="https://github.com/JabbyAlicante/khloris-ecommerce.git"
                target="_blank"
                class="view-code"
              >
                View Code >>
              </a>
            </div>
          </div>
        </div>

        <div class="card">
            <img src="${img6}" alt="School Social Media Platform" />
            
            <div class="card-content">
                <h3>The Wall</h3>
                
                <p>
                    Helped develop a social media platform for our school that allows 
                    students to share posts, interact with classmates, and stay updated 
                    with campus activities and announcements.
                </p>

                <div class="tech-stack">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node.js</span>
                    <span>MySQL</span>
                    <span>API</span>
                </div>
                <div class="project-links">
              <a 
                href="https://github.com/college-of-mary-immaculate/The-Wall-API.git"
                target="_blank"
                class="view-code"
              >
                View Code >>
              </a>
            </div>
            </div>
        </div>
      </div>
      <div class="coming-soon">
            <span class="soon-badge">In Progress</span>
            <h3 class="bounce-text">More Projects Coming Soon</h3>
      </div>
    </section>
  `;
}