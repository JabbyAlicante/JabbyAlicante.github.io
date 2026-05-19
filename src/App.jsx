import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'

import './styles/index.css'
import './styles/Header.css'
import './styles/home.css'
import './styles/about.css'
import './styles/journey.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/contact.css'

function App() {

  useEffect(() => {

    const root = document.getElementById('root');
    if (!root) return;

    const render = () => {
      const path = window.location.pathname;

      root.innerHTML = "";

      if (path === "/contact") {
        ContactPage(root);

      } else if (path === "/projects") {
        ProjectPage(root);

      } else {
        HomePage(root);
      }
    };

    // Initial render
    render();

    // Back / forward navigation
    window.addEventListener("popstate", render);

    // Re-render on pushState
    const originalPushState = window.history.pushState;

    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      render();
    };

    return () => {
      window.removeEventListener("popstate", render);
    };

  }, []);

  return null;
}

export default App;