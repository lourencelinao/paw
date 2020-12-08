const express = require('express')
const router = express.Router()

const express = require('express');
const router = express.Router();

const {
    addDog_image,
    deleteDog_image    
} = require("../../controllers/dog_image");

router.post('/addDog_image', addDog_image);
router.post('/deleteDog_image', deleteDog_image);

module.exports = router