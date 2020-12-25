const express = require("express");
const router = express.Router();

const {
  postIntake,
  getIntake,
  patchIntake,
  deleteIntake,
} = require("../../controllers/intake");

router.get('/:id', getIntake);
router.post('/', postIntake);
router.patch('/:id', patchIntake);
router.delete('/:id', deleteIntake);

module.exports = router;
