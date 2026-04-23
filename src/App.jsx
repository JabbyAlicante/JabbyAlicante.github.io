import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import './styles/index.css'
import './styles/Header.css'
import './styles//home.css'
import './styles/about.css'
import './styles/journey.css'
import './styles/skills.css'




function App() {
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      HomePage(root);
    }
  }, []);

  return <div id="app-container"></div>;
}

export default App;