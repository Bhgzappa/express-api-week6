const express = require("express");
const router = express.Router();
const {
  createPatient,
  getAllPatients,
  getSinglePatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientsController");

router.route("/").post(createPatient).get(getAllPatients);
router
  .route("/_id")
  .get(getSinglePatient)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;
