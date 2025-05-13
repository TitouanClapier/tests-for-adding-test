"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.resetStore = resetStore;
let users = [];
let nextId = 1;
function getUsers() {
    return users;
}
function createUser(name) {
    const user = { id: nextId++, name };
    users.push(user);
    return user;
}
function resetStore() {
    users = [];
    nextId = 1;
}
