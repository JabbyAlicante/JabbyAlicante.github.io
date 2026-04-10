import home from "../components/home.jsx";
import navbar from "../components/navbar.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";

export default function HomePage(root) {
  const { navigation, main } = DefaultLayout(root);

  navbar(navigation);
  home(main);
}

