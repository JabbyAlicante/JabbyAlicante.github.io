import projects from "../components/projects.jsx";
import navbar from "../components/navbar.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";

export default function ProjectPage(root) {
  const { navigation, main } = DefaultLayout(root);

  navbar(navigation);
  projects(main);
}
