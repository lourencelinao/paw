const express = require("express");
const router = express.Router();

const {
  createmedicalRec,
  getOne,
  getmedicalRec,
  medicalRecMenu,
  patchmedicalRec,
  deletemedicalRec,
} = require("../../controllers/medical_record");

router.get('/', getmedicalRec);
router.get('/:id/getOne', getOne)
router.get('/:id/menu', medicalRecMenu);
router.post('/', createmedicalRec);
router.patch('/:id', patchmedicalRec);
router.delete('/:id', deletemedicalRec);

module.exports = router;
