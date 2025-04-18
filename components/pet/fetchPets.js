import { getAllPets } from "../../api/pets";

export function mostrarPets() {
    const pets = getAllPets();
    let html = "";

    if (pets.length === 0) {
        html = `
      <div class="text-center text-muted">
        <p class="fs-5">Nenhum pet cadastrado ainda.</p>
        <p>Comece cadastrando seu primeiro pet!</p>
        <button class="btn btn-outline-secondary mt-2" onclick="trocarAbaDinamica(null, 'cadastro', 'mostrarFormulario')">➕ Cadastrar Pet</button>
      </div>
    `;
    } else {
        html = '<ul class="list-group">';
        pets.forEach((pet, index) => {
            html += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>${pet.nome}</strong> (${pet.tipo}) - ${pet.idade} anos<br>
            <small class="text-muted">Dono(a): ${pet.dono}</small>
          </div>
          <div>
            <button class="btn btn-sm btn-primary me-2" onclick="editarPet(${index})">Editar</button>
            <button class="btn btn-sm btn-danger" onclick="excluirPet(${index})">Excluir</button>
          </div>
        </li>
      `;
        });
        html += "</ul>";
    }

    document.getElementById("area-troca").innerHTML = html;
}

// Função que será chamada para editar um pet
export function editarPet(index) {
    const pet = getAllPets()[index];
    mostrarFormulario(pet, index);
    document.querySelector(".nav-link:nth-child(2)").classList.add("active");
    document.querySelector(".nav-link:nth-child(1)").classList.remove("active");
}

// Função que será chamada para excluir um pet
export function excluirPet(index) {
    const pets = getAllPets();
    const petId = pets[index].id;
    deletePet(petId);
    mostrarPets();
}
