export default function DefaultLayout(root) {
  root.innerHTML = `
    <nav id="navigation"></nav>
    <main id="main"></main>
  `;

  return {
    navigation: document.getElementById('navigation'),
    main: document.getElementById('main')
  };
}