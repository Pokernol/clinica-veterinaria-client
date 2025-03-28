// This file is responsible for the registration and management of pets within the system.

const pets = [];

// Function to register a new pet
function registerPet(pet) {
    pets.push(pet);
    return { message: "Pet registered successfully", pet };
}

// Function to get all pets
function getAllPets() {
    return pets;
}

// Function to get a pet by ID
function getPetById(id) {
    const pet = pets.find(p => p.id === id);
    return pet ? pet : { message: "Pet not found" };
}

// Function to update a pet's information
function updatePet(id, updatedPet) {
    const index = pets.findIndex(p => p.id === id);
    if (index !== -1) {
        pets[index] = { ...pets[index], ...updatedPet };
        return { message: "Pet updated successfully", pet: pets[index] };
    }
    return { message: "Pet not found" };
}

// Function to delete a pet
function deletePet(id) {
    const index = pets.findIndex(p => p.id === id);
    if (index !== -1) {
        pets.splice(index, 1);
        return { message: "Pet deleted successfully" };
    }
    return { message: "Pet not found" };
}

// Exporting the functions for use in other modules
module.exports = {
    registerPet,
    getAllPets,
    getPetById,
    updatePet,
    deletePet
};