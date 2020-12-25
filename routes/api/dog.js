const express = require('express');
const router = express.Router();
const { authRole } = require('../../middleware/auth');

const {
    getDogs,
    getDog,
    getDogByName,
    addDog,
    updateDog,
    deleteDog,
    getHealthyDogs,
    patchAdoption
} = require("../../controllers/dog");

router.get('/', getDogs);
router.patch('/adopted/:id', patchAdoption)
router.get('/healthy', getHealthyDogs);
router.get('/:id', getDog);
router.get('/name/:dog_name', getDogByName);
router.post('/', addDog);
router.patch('/:id', updateDog);
router.delete('/:id', deleteDog);

module.exports = router;