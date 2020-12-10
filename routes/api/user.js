const express = require('express')
const router = express.Router()
const { authRole } = require('../../middleware/auth');

const {
    getUser,
    addUser,
    updateUser,
    deleteUser,
    updateUserEmail,
    patchUserPassword
} = require("../../controllers/user");
router.get('/:email', getUser);
router.patch('/:id/updateUserEmail', updateUserEmail)
router.patch('/:id/patchUserPassword', patchUserPassword)
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;