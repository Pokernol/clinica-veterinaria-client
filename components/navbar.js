document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;

    const links = [
        { href: "/", label: "Início" },
        { href: "/pages/login.html", label: "Login" },
        { href: "/pages/dashboard.html", label: "Dashboard" },
        { href: "/pages/consultas.html", label: "Consultas" },
        { href: "/pages/pets.html", label: "Pets" },
        { href: "/pages/users.html", label: "Usuários" }
    ];

    const dropdownActions = [
        { href: "#", label: "Settings" },
        { href: "#", label: "Profile" },
        { divider: true }, // Adiciona um separador
        { href: "#", label: "Cadastrar" },
        { href: "#", label: "Login" },
        { href: "#", label: "Deslogar" }
    ];

    const navLinksHTML = links.map(link => `
        <li>
            <a href="${link.href}" class="nav-link ${currentPath.endsWith(link.href) ? 'text-secondary' : 'text-white'}">
                ${link.label}
            </a>
        </li>
    `).join("");

    const dropdownHTML = dropdownActions.map(action =>
        action?.divider
            ? `<li><hr class="dropdown-divider" /></li>`
            : `<li><a class="dropdown-item" href="${action.href}">${action.label}</a></li>`
    ).join("");

    const navbarHTML = `
        <header class="px-3 py-2 text-bg-dark border-bottom">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                    <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                        <img src="../assets/img/logo.svg" alt="Logo da Clínica Veterinária" class="logo" />
                    </a>

                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">aa</span>
                    </button>


                    <div class="navbar-collapse collapse" id="navbarCollapse" style="">
                        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            ${navLinksHTML}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    ${dropdownHTML}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    `;

    document.getElementById("navbar").innerHTML = navbarHTML;
});

// <nav class="navbar navbar-expand-xxl navbar-dark bg-dark" aria-label="Seventh navbar example">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="#">Expand at xxl</a>
//       <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="navbar-collapse collapse" id="navbarsExampleXxl" style="">
//         <ul class="navbar-nav me-auto mb-2 mb-xl-0">
//           <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="#">Home</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">Link</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//           </li>
//           <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
//             <ul class="dropdown-menu">
//               <li><a class="dropdown-item" href="#">Action</a></li>
//               <li><a class="dropdown-item" href="#">Another action</a></li>
//               <li><a class="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>
//         </ul>
//         <form role="search">
//           <input class="form-control" type="search" placeholder="Search" aria-label="Search">
//         </form>
//       </div>
//     </div>
//   </nav>