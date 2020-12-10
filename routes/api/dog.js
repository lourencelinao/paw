const express = require('express');
const router = express.Router();
const { authRole } = require('../../middleware/auth');

const {
    getDogs,
    getDog,
    addDog,
    updateDog,
    deleteDog
} = require("../../controllers/dog");

router.get('/', getDogs);
router.get('/:id', getDog);
router.post('/', addDog);
router.patch('/:id', updateDog);
router.delete('/:id', deleteDog);

module.exports = router;