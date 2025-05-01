class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const footerHTML = `
      <footer class="py-3 mt-4 text-bg-dark text-white">
        <p class="text-center text-white-50">© 2025 Cuidados Pet. Todos os direitos reservados.</p>
      </footer>
    `;

    this.innerHTML = footerHTML;
  }
}

customElements.define('footer-component', Footer);
