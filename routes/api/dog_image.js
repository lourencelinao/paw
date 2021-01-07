const express = require('express')
const router = express.Router()

const {
    addDog_image,
    deleteDog_image,
    getDog_image,
    getAll
} = require("../../controllers/dog_image");

router.get('/:id', getDog_image);
router.get('/', getAll);
router.post('/:id', addDog_image);
router.delete('/:id', deleteDog_image);

module.exports = router;