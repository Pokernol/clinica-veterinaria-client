// This file manages user-related operations, including user registration and profile management.

const users = [];

// Function to register a new user
function registerUser(username, password) {
    const user = { username, password };
    users.push(user);
    return user;
}

// Function to get user profile by username
function getUserProfile(username) {
    return users.find(user => user.username === username);
}

// Function to update user profile
function updateUserProfile(username, newData) {
    const user = getUserProfile(username);
    if (user) {
        Object.assign(user, newData);
        return user;
    }
    return null;
}

// Function to delete a user
function deleteUser(username) {
    const index = users.findIndex(user => user.username === username);
    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
}

// Exporting functions for use in other modules
module.exports = {
    registerUser,
    getUserProfile,
    updateUserProfile,
    deleteUser
};