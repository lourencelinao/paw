const express = require('express')
const router = express.Router()
const {createRescued, getRescued, patchRescued, deleteRescued} = require('../../controllers/rescued_intake')

router.get('/',getRescued)
router.post('/create',createRescued)
router.patch('/:id',patchRescued)
router.delete('/:id',deleteRescued)

module.exports = router