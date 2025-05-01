import './routers/router.js';
class MainComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <router-component></router-component>
    `;
  }
}

customElements.define('main-component', MainComponent);
