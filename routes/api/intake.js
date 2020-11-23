const express = require("express");
const router = express.Router();

const {
  createIntake,
  getIntake,
  patchIntake,
  deleteIntake,
} = require("../../controllers/intake");

router.get('/', getIntake);
router.post('/create', createIntake);
router.patch('/:id', patchIntake);
router.delete('/:id', deleteIntake);

module.exports = router;
