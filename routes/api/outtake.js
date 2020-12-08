const express = require('express')
const router = express.Router();

const {
    getOuttake,
    addOuttake,
    deleteOuttake
} = require("../../controllers/outtake");

router.get('/', getOuttake);
router.post('/addDog', addOuttake);
router.delete('/:id', deleteOuttake);

module.exports = router;