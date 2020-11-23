const express = require("express");
const router = express.Router();

const {
  createmedicalRec,
  getmedicalRec,
  medicalRecMenu,
  patchmedicalRec,
  deletemedicalRec,
} = require("../../controllers/medical_record");

router.get('/', getmedicalRec);
router.get('/menu', medicalRecMenu);
router.post('/create', createmedicalRec);
router.patch('/:id', patchmedicalRec);
router.delete('/:id', deletemedicalRec);

module.exports = router;
