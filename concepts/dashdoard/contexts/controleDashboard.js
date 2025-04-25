// Função para carregar os dados do dashboard
function loadDashboardData() {
  // Importar as funções do pets.js
  import('../../../api/pets.js')
    .then(petsModule => {
      // Obter todos os pets
      const pets = petsModule.getAllPets();

      // Atualizar o contador de pets
      document.getElementById('totalPets').textContent = pets.length;
      console.log('Total de pets:', pets.length);
      console.log('Dados dos pets:', pets);
      // Estatísticas adicionais (exemplo)
      const especies = {};
      const idades = [];

      // Calcular estatísticas
      pets.forEach(pet => {
        // Contagem por espécie
        if (pet.especie) {
          especies[pet.especie] = (especies[pet.especie] || 0) + 1;
        }

        // Coletar idades
        if (pet.idade) {
          idades.push(pet.idade);
        }
      });

      // Console log para debug
      console.log('Total de pets:', pets.length);
      console.log('Espécies:', especies);

      // Aqui você poderia adicionar mais estatísticas para exibir no dashboard

      // Exemplo: adicionar um gráfico de distribuição de espécies
      if (document.getElementById('especiesChart')) {
        criarGraficoEspecies(especies);
      }

      // Exemplo: mostrar os 5 últimos pets cadastrados
      mostrarUltimosPets(pets);
    })
    .catch(error => {
      console.error('Erro ao carregar dados dos pets:', error);
      document.getElementById('totalPets').textContent = 'Erro';
    });

  // Carregar dados de consultas (exemplo)
  carregarDadosConsultas();

  // Carregar dados de usuários (exemplo)
  carregarDadosUsuarios();
}

// Função para mostrar os últimos pets cadastrados
function mostrarUltimosPets(pets) {
  // Ordenar por data de cadastro (assumindo que existe um campo 'dataCadastro')
  // Se não existir, você pode adaptar esta lógica
  const petsSorted = [...pets].sort((a, b) => {
    const dateA = a.dataCadastro ? new Date(a.dataCadastro) : new Date(0);
    const dateB = b.dataCadastro ? new Date(b.dataCadastro) : new Date(0);
    return dateB - dateA; // Ordem decrescente
  });

  // Pegar os 5 últimos
  const ultimosPets = petsSorted.slice(0, 5);

  // Criar uma tabela para exibir na página
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

  // Adicionar a tabela ao final do container
  const container = document.querySelector('.container');
  const div = document.createElement('div');
  div.classList.add('row', 'mt-3');
  div.innerHTML = tabelaHTML;
  container.appendChild(div);
}

// Funções de exemplo para carregar outros dados
function carregarDadosConsultas() {
  // Aqui você implementaria a lógica para carregar dados das consultas
  // Por enquanto, apenas um mock
  document.getElementById('totalConsultas').textContent = '0';

  // Limpar a tabela de consultas
  const consultasList = document.getElementById('consultasList');
  consultasList.innerHTML =
    '<tr><td colspan="4" class="text-center">Carregando consultas...</td></tr>';

  // Simular tempo de carregamento
  setTimeout(() => {
    consultasList.innerHTML =
      '<tr><td colspan="4" class="text-center">Nenhuma consulta agendada.</td></tr>';
  }, 500);
}

function carregarDadosUsuarios() {
  // Aqui você implementaria a lógica para carregar dados dos usuários
  // Por enquanto, apenas um mock
  document.getElementById('totalUsuarios').textContent = '0';
}

// Função para criar um gráfico de distribuição de espécies (exemplo)
function criarGraficoEspecies(especies) {
  // Esta função seria implementada se você estiver usando uma biblioteca de gráficos
  console.log('Dados para gráfico de espécies:', especies);
}

// Chamar a função quando o documento estiver pronto
$(document).ready(function () {
  loadDashboardData();
});
