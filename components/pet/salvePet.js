import { getAllPets, registerPet, updatePet, deletePet } from "../../api/pets";

// Função para mostrar o formulário de cadastro ou edição de pet
export function mostrarFormulario(pet = {}, index = null) {
    const isEditando = index !== null;
    document.getElementById("area-troca").innerHTML = `
    <form onsubmit="salvarPet(event, ${index})">
      <div class="mb-3">
        <label class="form-label">Nome do Pet</label>
        <input type="text" class="form-control" id="nome" value="${
            pet.nome || ""
        }" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Tipo (ex: cachorro, gato)</label>
        <input type="text" class="form-control" id="tipo" value="${
            pet.tipo || ""
        }" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Idade (em anos)</label>
        <input type="number" class="form-control" id="idade" value="${
            pet.idade || ""
        }" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Nome do Dono</label>
        <input type="text" class="form-control" id="dono" value="${
            pet.dono || ""
        }" required>
      </div>
      <button type="submit" class="btn btn-success">
        ${isEditando ? "Salvar alterações" : "Cadastrar Pet"}
      </button>
    </form>
  `;
}

// Função para salvar o pet (ou atualizar, se editando)
export function salvarPet(e, index) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const tipo = document.getElementById("tipo").value;
    const idade = document.getElementById("idade").value;
    const dono = document.getElementById("dono").value;

    const novoPet = {
        id: index !== null ? getAllPets()[index].id : crypto.randomUUID(),
        nome,
        tipo,
        idade,
        dono,
    };

    if (index !== null) {
        updatePet(novoPet.id, novoPet);
    } else {
        registerPet(novoPet);
    }

    mostrarPets();
    document.querySelector(".nav-link:nth-child(1)").classList.add("active");
    document.querySelector(".nav-link:nth-child(2)").classList.remove("active");
}
