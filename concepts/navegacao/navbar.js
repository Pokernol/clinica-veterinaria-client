class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.attachNavigationEvents();
  }

  render() {
    const currentPath =
      document.querySelector('router-component')?.currentPage || '';

    const links = [
      { page: '', label: 'Início' },
      { page: 'dashboard', label: 'Dashboard' },
      { page: 'consultas', label: 'Consultas', disable: true },
      { page: 'pets', label: 'Pets' },
      { page: 'users', label: 'Usuários', disable: true },
    ];

    const dropdownActions = [
      { label: 'Settings', disable: true },
      { label: 'Profile', disable: true },
      { divider: true },
      { label: 'Cadastrar', disable: true },
      { page: 'login', label: 'Login' },
      { label: 'Deslogar', disable: true },
    ];

    const navLinksHTML = links
      .map(({ page, label, disable }) => {
        const isActive = currentPath === page;
        const classes = [
          'nav-link',
          isActive ? 'bg-white bg-opacity-10 text-white rounded' : 'text-white',
          disable ? 'disabled text-white-50' : '',
        ]
          .join(' ')
          .trim();

        const extraAttrs = disable
          ? 'tabindex="-1" aria-disabled="true"'
          : `data-page="${page}"`;

        return `
        <li class="nav-item ps-2">
          <a href="#" class="${classes}" ${extraAttrs}>
            ${label}
          </a>
        </li>
      `;
      })
      .join('');

    const dropdownHTML = dropdownActions
      .map(action => {
        if (action?.divider) {
          return `<li><hr class="dropdown-divider" /></li>`;
        }

        const attrs =
          action.page && !action.disable
            ? `href="#" data-page="${action.page}"`
            : 'href="#"';

        const disabledClass = action.disable ? 'disabled' : '';

        return `<li><a class="dropdown-item ${disabledClass}" ${attrs}>${action.label}</a></li>`;
      })
      .join('');

    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" data-page="">
          <img src="./assets/img/logo.svg" alt="Logo da Clínica" class="logo" />
        </a>
        <div>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" id="offcanvasNavbar">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Menu</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                ${navLinksHTML}
                <li class="nav-item dropdown ps-2">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="Usuário" width="32" height="32" class="rounded-circle" />
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="navbarDropdown">
                    ${dropdownHTML}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
  }

  attachNavigationEvents() {
    const links = this.querySelectorAll('[data-page]');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        if (link.classList.contains('disabled')) return;
        const page = link.dataset.page;
        const router = document.querySelector('router-component');
        router.navigate(page);
      });
    });
  }
}

customElements.define('navbar-component', Navbar);
