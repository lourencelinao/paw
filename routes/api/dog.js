const express = require('express');
const router = express.Router();
const { authRole } = require('../../middleware/auth');

const {
    getDog,
    addDog,
    updateDog,
    deleteDog
} = require("../../controllers/dog");

router.get('/', getDog);
router.post('/', addDog);
router.put('/:id', updateDog);
router.delete('/:id', deleteDog);

module.exports = router;