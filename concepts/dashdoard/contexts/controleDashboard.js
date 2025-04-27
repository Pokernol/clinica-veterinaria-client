// Função para carregar os dados do dashboard
function loadDashboardData() {
  // Importar as funções do pets.js
  import('../../../api/pets.js')
    .then(petsModule => {
      const pets = petsModule.getAllPets();

      document.getElementById('totalPets').textContent = pets.length;
      const especies = {};
      const idades = [];

      pets.forEach(pet => {
        if (pet.especie) {
          especies[pet.especie] = (especies[pet.especie] || 0) + 1;
        }

        if (pet.idade) {
          idades.push(pet.idade);
        }
      });

      if (document.getElementById('especiesChart')) {
        criarGraficoEspecies(especies);
      }

      mostrarUltimosPets(pets);
    })
    .catch(error => {
      console.error('Erro ao carregar dados dos pets:', error);
      document.getElementById('totalPets').textContent = 'Erro';
    });

  carregarDadosConsultas();

  carregarDadosUsuarios();
}

function mostrarUltimosPets(pets) {
  const petsSorted = [...pets].sort((a, b) => {
    const dateA = a.dataCadastro ? new Date(a.dataCadastro) : new Date(0);
    const dateB = b.dataCadastro ? new Date(b.dataCadastro) : new Date(0);
    return dateB - dateA;
  });

  const ultimosPets = petsSorted.slice(0, 5);

  const tabelaHTML = `
    <h2 class="mt-4">Últimos Pets Cadastrados</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Espécie</th>
          <th>Raça</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        ${
          ultimosPets.length > 0
            ? ultimosPets
                .map(
                  pet => `
            <tr>
              <td>${pet.nome || 'N/A'}</td>
              <td>${pet.especie || 'N/A'}</td>
              <td>${pet.raca || 'N/A'}</td>
              <td>${pet.idade ? pet.idade + ' anos' : 'N/A'}</td>
            </tr>
          `
                )
                .join('')
            : '<tr><td colspan="4" class="text-center">Nenhum pet cadastrado.</td></tr>'
        }
      </tbody>
    </table>
  `;

  const container = document.querySelector('.container');
  const div = document.createElement('div');
  div.classList.add('row', 'mt-3');
  div.innerHTML = tabelaHTML;
  container.appendChild(div);
}

function carregarDadosConsultas() {
  document.getElementById('totalConsultas').textContent = '0';

  const consultasList = document.getElementById('consultasList');
  consultasList.innerHTML =
    '<tr><td colspan="4" class="text-center">Carregando consultas...</td></tr>';

  setTimeout(() => {
    consultasList.innerHTML =
      '<tr><td colspan="4" class="text-center">Nenhuma consulta agendada.</td></tr>';
  }, 500);
}

function carregarDadosUsuarios() {
  document.getElementById('totalUsuarios').textContent = '0';
}

function criarGraficoEspecies(especies) {}

$(document).ready(function () {
  loadDashboardData();
});
