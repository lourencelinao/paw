const express = require('express')
const router = express.Router()

const express = require('express');
const router = express.Router();

const {
    getDog_image,
    addDog_image,
    deleteDog_image    
} = require("../../controllers/dog_image");

router.get('/', getDog_image);
router.post('/addDog_image', addDog_image);
router.delete('/:id', deleteDog_image);

module.exports = router;