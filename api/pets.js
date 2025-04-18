function carregarPets() {
  return JSON.parse(localStorage.getItem('pets')) || [];
}

function salvarPets(pets) {
  localStorage.setItem('pets', JSON.stringify(pets));
}

export function registerPet(pet) {
  const pets = carregarPets();
  pets.push(pet);
  salvarPets(pets);
  return { message: 'Pet registrado com sucesso', pet };
}

export function getAllPets() {
  return carregarPets();
}

export function getPetById(id) {
  const pets = carregarPets();
  const pet = pets.find(p => p.id === id);
  return pet ? pet : { message: 'Pet não encontrado' };
}

export function updatePet(id, updatedPet) {
  const pets = carregarPets();
  const index = pets.findIndex(p => p.id === id);
  if (index !== -1) {
    pets[index] = { ...pets[index], ...updatedPet };
    salvarPets(pets);
    return { message: 'Pet atualizado com sucesso', pet: pets[index] };
  }
  return { message: 'Pet não encontrado' };
}

export function deletePet(id) {
  const pets = carregarPets();
  const index = pets.findIndex(p => p.id === id);
  if (index !== -1) {
    pets.splice(index, 1);
    salvarPets(pets);
    return { message: 'Pet deletado com sucesso' };
  }
  return { message: 'Pet não encontrado' };
}
