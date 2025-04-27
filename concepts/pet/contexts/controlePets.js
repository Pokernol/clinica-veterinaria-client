import {
  deletePet,
  getAllPets,
  getPetById,
  registerPet,
  updatePet,
} from '../../../api/pets.js';

/**
 * Exibe a lista de pets cadastrados
 *
 * @returns {void}
 */
function mostrarPets() {
  const pets = getAllPets();
  let html = '';

  if (pets.length === 0) {
    html = `
      <div class="text-center text-muted">
        <p class="fs-5">Nenhum pet cadastrado ainda.</p>
        <p>Comece cadastrando seu primeiro pet!</p>
        <button class="btn btn-outline-secondary mt-2" onclick="window.trocarParaCadastro()">➕ Cadastrar Pet</button>
      </div>
    `;
  } else {
    html = '<ul class="list-group">';
    pets.forEach((pet, index) => {
      html += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>${pet.nome}</strong> (${pet.tipo}) - ${pet.idade} anos<br>
        ${
          pet.especie
            ? `<span class="text-muted">Espécie: ${pet.especie}</span><br>`
            : ''
        }
        ${
          pet.raca
            ? `<span class="text-muted">Raça: ${pet.raca}</span><br>`
            : ''
        }
        <small class="text-muted">Dono(a): ${pet.dono}</small>
      </div>
      <div>
        <button class="btn btn-sm btn-primary me-2" onclick="window.editarPet('${
          pet.id
        }')">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="window.excluirPet('${
          pet.id
        }')">Excluir</button>
      </div>
    </li>
  `;
    });
    html += '</ul>';
  }

  document.getElementById('area-troca').innerHTML = html;
}

/**
 * Exibe o formulário para cadastro ou edição de pet
 * @param {Object} pet - Objeto contendo dados do pet (opcional)
 * @param {string} petId - ID do pet (opcional, para edição)
 */
function mostrarFormulario(pet = {}, petId = null) {
  const isEditando = petId !== null;

  document.getElementById('area-troca').innerHTML = `
    <form id="petForm">
      <input type="hidden" id="petId" value="${petId || ''}">
      <div class="mb-3">
        <label class="form-label">Nome do Pet *</label>
        <input type="text" class="form-control" id="nome" value="${
          pet.nome || ''
        }" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Tipo (ex: cachorro, gato) *</label>
        <input type="text" class="form-control" id="tipo" value="${
          pet.tipo || ''
        }" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Espécie (ex: mamífero, ave)</label>
        <input type="text" class="form-control" id="especie" value="${
          pet.especie || ''
        }">
      </div>
      <div class="mb-3">
        <label class="form-label">Raça (ex: bulldog, siamês)</label>
        <input type="text" class="form-control" id="raca" value="${
          pet.raca || ''
        }">
      </div>
      <div class="mb-3">
        <label class="form-label">Idade (em anos) *</label>
        <input type="number" class="form-control" id="idade" value="${
          pet.idade || ''
        }" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Nome do Dono *</label>
        <input type="text" class="form-control" id="dono" value="${
          pet.dono || ''
        }" required>
      </div>
      <button type="submit" class="btn btn-success">${
        isEditando ? 'Salvar alterações' : 'Cadastrar Pet'
      }</button>
      ${
        isEditando
          ? '<button type="button" class="btn btn-secondary ms-2" id="btnCancelar">Cancelar</button>'
          : ''
      }
    </form>
  `;

  const form = document.getElementById('petForm');
  form.addEventListener('submit', e => {
    const camposRequeridos = form.querySelectorAll('[required]');
    let formValido = true;

    camposRequeridos.forEach(campo => {
      if (!campo.value.trim()) {
        campo.classList.add('is-invalid');
        formValido = false;
      } else {
        campo.classList.remove('is-invalid');
      }
    });

    if (!formValido) {
      e.preventDefault();
      return;
    }

    salvarPet(e);
  });

  const camposRequeridos = form.querySelectorAll('[required]');
  camposRequeridos.forEach(campo => {
    campo.addEventListener('input', function () {
      this.classList.remove('is-invalid');
    });
  });

  if (isEditando && document.getElementById('btnCancelar')) {
    document.getElementById('btnCancelar').addEventListener('click', () => {
      mostrarPets();
      document
        .querySelector('.nav-link[data-id="lista"]')
        .classList.add('active');
      document
        .querySelector('.nav-link[data-id="cadastro"]')
        .classList.remove('active');
    });
  }
}

/**
 * Salva os dados do pet (novo ou editado)
 * @param {Event} e - Evento de submit do formulário
 */
function salvarPet(e) {
  e.preventDefault();
  const petId = document.getElementById('petId').value;
  const nome = document.getElementById('nome').value;
  const tipo = document.getElementById('tipo').value;
  const especie = document.getElementById('especie')?.value || '';
  const raca = document.getElementById('raca')?.value || '';
  const idade = parseInt(document.getElementById('idade').value);
  const dono = document.getElementById('dono').value;

  const petData = {
    nome,
    tipo,
    especie,
    raca,
    idade,
    dono,
  };

  if (petId) {
    updatePet(petId, petData);
  } else {
    petData.id = crypto.randomUUID();
    registerPet(petData);
  }

  mostrarPets();
  document.querySelector('.nav-link[data-id="lista"]').classList.add('active');
  document
    .querySelector('.nav-link[data-id="cadastro"]')
    .classList.remove('active');
}

/**
 * Prepara o formulário para edição de um pet
 * @param {string} petId - ID do pet a ser editado
 */
function editarPet(petId) {
  const pet = getPetById(petId);
  if (pet && !pet.message) {
    mostrarFormulario(pet, petId);
    document
      .querySelector('.nav-link[data-id="cadastro"]')
      .classList.add('active');
    document
      .querySelector('.nav-link[data-id="lista"]')
      .classList.remove('active');
  } else {
    alert('Pet não encontrado!');
  }
}

/**
 * Remove um pet da lista
 * @param {string} petId - ID do pet a ser removido
 */
function excluirPet(petId) {
  if (confirm('Tem certeza que deseja excluir este pet?')) {
    deletePet(petId);
    mostrarPets();
  }
}

/**
 * Muda para a aba de cadastro
 */
function trocarParaCadastro() {
  document.querySelector('.nav-link[data-id="cadastro"]').click();
}

window.trocarParaCadastro = trocarParaCadastro;
window.editarPet = editarPet;
window.excluirPet = excluirPet;

export {
  editarPet,
  excluirPet,
  mostrarFormulario,
  mostrarPets,
  salvarPet,
  trocarParaCadastro,
};
