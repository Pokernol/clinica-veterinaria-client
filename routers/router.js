import '../concepts/footer/footer.js';
import '../concepts/navegacao/navbar.js';

class RouterComponent extends HTMLElement {
  connectedCallback() {
    this.render();

    // Roteamento inicial
    const initialPage = window.location.pathname.slice(1) || 'home';
    this.updatePage(initialPage);

    // Ouvir evento de voltar/avançar
    window.addEventListener('popstate', event => {
      const pageName = event.state?.page || 'home';
      this.updatePage(pageName);
    });
  }

  render() {
    this.innerHTML = `
      <div class="d-flex flex-column min-vh-100">
        <navbar-component></navbar-component>

        <main class="p-4 flex-grow-1">
          <div class="page" data-page="home"><h1>Bem-vindo à Clínica Veterinária</h1></div>
          <div class="page" data-page="login"><h1>Página de Login</h1></div>
          <div class="page" data-page="register"><h1>Página de Registro</h1></div>
          <div class="page" data-page="dashboard"><h1>Dashboard</h1></div>
          <div class="page" data-page="profile"><h1>Perfil</h1></div>
          <div class="page" data-page="appointments"><h1>Consultas</h1></div>
          <div class="page" data-page="not-found" class="d-none"><h1>Página não encontrada</h1></div>
        </main>

        <footer-component></footer-component>
      </div>
    `;
  }

  updatePage(pageName) {
    const pages = this.querySelectorAll('.page');
    let found = false;

    pages.forEach(page => {
      if (page.dataset.page === pageName) {
        page.classList.remove('d-none');
        found = true;
      } else {
        page.classList.add('d-none');
      }
    });

    if (!found) {
      this.querySelector('[data-page="not-found"]').classList.remove('d-none');
    }
  }

  navigate(pageName) {
    this.updatePage(pageName);
    history.pushState({ page: pageName }, '', `/${pageName}`);
  }
}

customElements.define('router-component', RouterComponent);
