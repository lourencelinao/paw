const express = require('express')
const router = express.Router()
const {createSurrendered, getSurrendered, patchSurrendered, deleteSurrendered} = require('../../controllers/surrendered_intake')

router.get('/',getSurrendered)
router.post('/create',createSurrendered)
router.patch('/:id',patchSurrendered)
router.delete('/:id',deleteSurrendered)


module.exports = router