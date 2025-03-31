document.addEventListener("DOMContentLoaded", function () {
    const modalHTML = `
        <div class="modal fade" id="forgotPasswordModal" tabindex="-1" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="forgotPasswordModalLabel">Recuperar Senha</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Digite seu email para receber um link de redefinição de senha.</p>
                        <input type="email" class="form-control" id="forgotPasswordEmail" placeholder="Digite seu email" required>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary" id="sendResetLink">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById("esqueci-a-senha-modal").innerHTML = modalHTML;

    document.getElementById("esqueci-a-senha-link").addEventListener("click", function (e) {
        e.preventDefault();
        new bootstrap.Modal(document.getElementById("forgotPasswordModal")).show();
    });
});
