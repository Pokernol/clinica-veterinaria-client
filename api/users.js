function carregarUsuarios() {
  return JSON.parse(localStorage.getItem('usuarios')) || [];
}

function salvarUsuarios(usuarios) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function criarUsuario(usuario) {
  const usuarios = carregarUsuarios();
  const jaExiste = usuarios.some(u => u.email === usuario.email);

  if (jaExiste) {
    return { success: false, message: 'Usuário já cadastrado com esse email.' };
  }

  usuarios.push(usuario);
  salvarUsuarios(usuarios);

  return { success: true, message: 'Usuário registrado com sucesso.', usuario };
}

function buscarUsuarioPorEmail(email) {
  const usuarios = carregarUsuarios();
  return usuarios.find(u => u.email === email);
}

function buscarTodosUsuarios() {
  return carregarUsuarios();
}

export { buscarTodosUsuarios, buscarUsuarioPorEmail, criarUsuario };
