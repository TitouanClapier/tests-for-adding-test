"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersStore_1 = require("./usersStore");
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.status(200).json((0, usersStore_1.getUsers)());
});
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'name is required' });
    }
    const user = (0, usersStore_1.createUser)(name);
    res.status(201).json(user);
});
exports.default = router;
