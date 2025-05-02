class Login extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = ``;
  }
  addEventListeners() {
    const form = this.querySelector('#login-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleLogin(event);
    });
  }

  handleLogin(event) {
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log('Email:', email);
    console.log('Senha:', password);

    window.location.href = '/';
  }
}

customElements.define('login-page', Login);
