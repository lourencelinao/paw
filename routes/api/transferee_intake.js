const express = require('express')
const router = express.Router()

const {createTransferee, getTransferee, patchTransferee, deleteTransferee} = require('../../controllers/transferee_intake')


router.get('/',getTransferee)
router.post('/create',createTransferee)
router.patch('/:id',patchTransferee)
router.delete('/:id',deleteTransferee)

module.exports = router