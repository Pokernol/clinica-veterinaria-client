import { login, register } from '../../../api/auth.js';
import { showModal } from '../../generics/components/modal.js';

function loadLogin() {
  const container = document.getElementById('auth-container');
  if (!container) {
    console.error("Elemento 'auth-container' não encontrado.");
    return;
  }

  container.innerHTML = `
    <div class="d-flex flex-column align-items-center justify-content-center text-center gap-2 mb-4">
      <img src="../../../assets/img/profile.svg" width="80px" alt="Pessoa com um circulo ao redor" />
      <h2 class="text-xl-center">Login</h2>
    </div>
    <form id="loginForm">
      <div class="form-group mb-3">
        <input
          type="email"
          class="form-control rounded-pill"
          id="email"
          placeholder="exemplo@dominio.com"
          required
          maxlength="50"
        />
      </div>
      <div class="form-group mb-3">
        <input
          type="password"
          class="form-control rounded-pill"
          id="password"
          placeholder="Digite sua senha"
          required
          minlength="8"
          maxlength="20"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100 rounded-pill mb-3">Login</button>
      <div class="d-flex justify-content-between small text-muted">
        <label><input type="checkbox" class="form-check-input me-1"/> Remember me</label>
        <a href="#" id="forgot-password-link" class="text-decoration-none">esqueceu a senha?</a>
      </div>
    </form>
    <div class="text-center mt-3 small">
      Não tem uma conta? <a href="#register" class="text-decoration-none">Criar conta</a>
    </div>
  `;

  const form = document.querySelector('#loginForm');
  form.addEventListener('submit', async e => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('password').value;

    const resultado = login({ email, senha });

    if (resultado.success) {
      alert('Login bem-sucedido!');
      window.location.href = '../../../index.html';
    } else {
      alert(resultado.message);
    }
  });

  const registerLink = document.querySelector('a[href="#register"]');
  registerLink.addEventListener('click', e => {
    e.preventDefault();
    window.location.hash = '#register';
  });

  document
    .getElementById('forgot-password-link')
    .addEventListener('click', function (e) {
      e.preventDefault();
      const titleModal = 'Recuperar Senha';
      const bodyModal =
        '<p>Digite seu email para receber um link de redefinição de senha.</p>' +
        '<input type="email" class="form-control" id="forgotPasswordEmail" placeholder="Digite seu email" required>';
      const buttonModal = 'Enviar';
      const callbackModal = function () {
        const emailInput = document.getElementById('forgotPasswordEmail');
        const email = emailInput.value;
        if (email) {
          document.getElementById('loadingSpinner').style.display = 'block';
          setTimeout(() => {
            document.getElementById('loadingSpinner').style.display = 'none';
            alert('Link de recuperação enviado para: ' + email);
          }, 2000);
        }
      };
      const initCallback = function () {
        setTimeout(() => {
          document.getElementById('forgotPasswordEmail').focus();
        }, 500);
      };

      showModal(
        titleModal,
        bodyModal,
        buttonModal,
        callbackModal,
        initCallback
      );
    });
}

function loadRegister() {
  const container = document.getElementById('auth-container');
  if (!container) {
    console.error("Elemento 'auth-container' não encontrado.");
    return;
  }

  container.innerHTML = `
    <div class="d-flex flex-column align-items-center justify-content-center text-center gap-2 mb-4">
      <img src="../../../assets/img/add_account.svg" width="80px" alt="Pessoal com um sinal de mais ao lado" />
      <h2 class="text-xl-center">Cadastro</h2>
    </div>
    <form id="registerForm">
      <div class="form-group mb-3">
        <input
          type="text"
          class="form-control rounded-pill"
          id="name"
          placeholder="Nome completo"
          required
          maxlength="50"
        />
      </div>
      <div class="form-group mb-3">
        <input
          type="email"
          class="form-control rounded-pill"
          id="email"
          placeholder="exemplo@dominio.com"
          required
          maxlength="50"
        />
      </div>
      <div class="form-group mb-3">
        <input
          type="password"
          class="form-control rounded-pill"
          id="password"
          placeholder="Crie uma senha"
          required
          minlength="8"
          maxlength="20"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100 rounded-pill mb-3">Registrar</button>
    </form>
    <div class="text-center mt-3 small">
      Já tem uma conta? <a href="#login" class="text-decoration-none">Fazer login</a>
    </div>
  `;

  const loginLink = document.querySelector('a[href="#login"]');
  loginLink.addEventListener('click', e => {
    e.preventDefault();
    window.location.hash = '#login';
  });

  const form = document.querySelector('#registerForm');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('password').value;

    const resultado = register({ nome, email, senha });

    if (resultado.success) {
      alert('Cadastro realizado com sucesso!');
      window.location.hash = '#login';
    } else {
      alert(resultado.message);
    }
  });
}

export { loadLogin, loadRegister };
