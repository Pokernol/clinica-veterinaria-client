import { buscarUsuarioPorEmail, criarUsuario } from './users.js';

function register({ nome, email, senha }) {
  const novoUsuario = {
    id: crypto.randomUUID(),
    nome,
    email,
    senha,
  };

  return criarUsuario(novoUsuario);
}

function login({ email, senha }) {
  const usuario = buscarUsuarioPorEmail(email);

  if (!usuario) {
    return { success: false, message: 'Usuário não encontrado.' };
  }

  if (usuario.senha !== senha) {
    return { success: false, message: 'Senha incorreta.' };
  }

  localStorage.setItem(
    'usuarioLogado',
    JSON.stringify({
      email: usuario.email,
      nome: usuario.nome,
      token: crypto.randomUUID(),
    })
  );

  return { success: true, message: 'Login realizado com sucesso.', usuario };
}

function logout() {
  localStorage.removeItem('usuarioLogado');
}

function getUsuarioLogado() {
  return JSON.parse(localStorage.getItem('usuarioLogado.token'));
}

export { getUsuarioLogado, login, logout, register };
