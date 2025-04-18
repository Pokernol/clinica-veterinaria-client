document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;

    const links = [
        { href: "/", label: "Início" },
        { href: "/pages/dashboard.html", label: "Dashboard" },
        // { href: "/pages/consultas.html", label: "Consultas" },
        { href: "/pages/pet.html", label: "Pets" },
        // { href: "/pages/users.html", label: "Usuários" },
    ];

    const dropdownActions = [
        // { href: "#", label: "Settings" },
        // { href: "#", label: "Profile" },
        // { divider: true },
        // { href: "#", label: "Cadastrar" },
        { href: "/pages/login.html", label: "Login" },
        // { href: "#", label: "Deslogar" },
    ];

    const navLinksHTML = links
        .map(
            (link) => `
        <li class="nav-item ps-2">
            <a href="${link.href}" class="nav-link ${
                currentPath.endsWith(link.href)
                    ? "text-secondary"
                    : "text-white"
            }">
                ${link.label}
            </a>
        </li>
    `
        )
        .join("");

    const dropdownHTML = dropdownActions
        .map((action) =>
            action?.divider
                ? `<li><hr class="dropdown-divider" /></li>`
                : `<li><a class="dropdown-item" href="${action.href}">${action.label}</a></li>`
        )
        .join("");

    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a href="/" class="navbar-brand">
                    <img src="../assets/img/logo.svg" alt="Logo da Clínica Veterinária" class="logo" />
                </a>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="offcanvas offcanvas-end offcanvas-lg text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
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

    document.getElementById("navbar").innerHTML = navbarHTML;
});
