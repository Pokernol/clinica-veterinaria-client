// api/pets.js

// Utilitário para carregar e salvar no localStorage
function carregarPets() {
    return JSON.parse(localStorage.getItem("pets")) || [];
}

function salvarPets(pets) {
    localStorage.setItem("pets", JSON.stringify(pets));
}

// Função para registrar um novo pet
export function registerPet(pet) {
    const pets = carregarPets();
    pets.push(pet);
    salvarPets(pets);
    return { message: "Pet registrado com sucesso", pet };
}

// Função para obter todos os pets
export function getAllPets() {
    return carregarPets();
}

// Função para obter um pet por ID
export function getPetById(id) {
    const pets = carregarPets();
    const pet = pets.find((p) => p.id === id);
    return pet ? pet : { message: "Pet não encontrado" };
}

// Função para atualizar um pet
export function updatePet(id, updatedPet) {
    const pets = carregarPets();
    const index = pets.findIndex((p) => p.id === id);
    if (index !== -1) {
        pets[index] = { ...pets[index], ...updatedPet };
        salvarPets(pets);
        return { message: "Pet atualizado com sucesso", pet: pets[index] };
    }
    return { message: "Pet não encontrado" };
}

// Função para deletar um pet
export function deletePet(id) {
    const pets = carregarPets();
    const index = pets.findIndex((p) => p.id === id);
    if (index !== -1) {
        pets.splice(index, 1);
        salvarPets(pets);
        return { message: "Pet deletado com sucesso" };
    }
    return { message: "Pet não encontrado" };
}
