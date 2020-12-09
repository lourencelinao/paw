const express = require('express')
const router = express.Router()

const {
    getActions,
    addAction,
    deleteAction
} = require("../../controllers/action");

router.get('/', getActions);
router.post('/addAction', addAction);
router.post('/deleteAction', deleteAction);

module.exports = router