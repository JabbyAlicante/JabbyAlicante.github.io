export default function contact(element) {
  element.innerHTML = `
    <section class="contact-section">

      <div class="title-contact">
        <h2>// contact me</h2>
      </div>

      <div class="contact-header">
        <h1>Get in Touch</h1>

        <p>
          Have a project in mind, want to collaborate,
          or just say hello? Feel free to reach out anytime.
        </p>
      </div>

      <div class="contact-content">

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=alicantejabbylumenso@email.com"
          target="_blank"
          class="contact-card"
        >
          <i class="fa-regular fa-envelope"></i>
          <span>Email</span>
        </a>

        <a href="https://github.com/JabbyAlicante" target="_blank" class="contact-card">
          <i class="fa-brands fa-square-github"></i>
          <span>GitHub</span>
        </a>

        <a href="https://linkedin.com/in/jabbyalicante" target="_blank" class="contact-card">
          <i class="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>

      </div>

    </section>
  `;
}