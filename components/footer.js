document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
        <footer class="pt-3 text-bg-dark text-white">
            <ul class="nav justify-content-center border-bottom border-light pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white-50">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white-50">Features</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white-50">Pricing</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white-50">FAQs</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-white-50">About</a></li>
            </ul>
            <p class="text-center text-white-50">© 2023 Clínica Veterinária. Todos os direitos reservados.</p>
        </footer>
    `;

    document.getElementById("footer").innerHTML = footerHTML;
});
