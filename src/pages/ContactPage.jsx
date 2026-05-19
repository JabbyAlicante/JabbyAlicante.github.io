import contact from "../components/contact.jsx";
import navbar from "../components/navbar.jsx";
import DefaultLayout from "../layouts/DefaultLayout.jsx";

export default function ContactPage(root) {
  const { navigation, main } = DefaultLayout(root);

  navbar(navigation);
  contact(main);
}
