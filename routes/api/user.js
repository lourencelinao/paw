const express = require('express')
const router = express.Router()
const { authRole } = require('../../middleware/auth');

const {
    getUser,
    addUser,
    updateUser,
    deleteUser
} = require("../../controllers/user");
router.get('/', getUser);
router.post('/addUser', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;