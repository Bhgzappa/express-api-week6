const Patient = require("../models/patientSchema");

const createPatient = async (req, res) => {
  const newPatient = new Patient({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    diagnosis: req.body.diagnosis,
    doa: req.body.doa,
    dod: req.body.dod,
  });
  await newPatient.save();
  res.status(201).json(newPatient);
};

const getAllPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

const getSinglePatient = async (req, res) => {
  const patient = await Patient.findById(req.params._id);
  res.json(patient);
};

const updatePatient = async (req, res) => {
  const foundPatient = await Patient.findById(req.params._id);
  if (foundPatient) {
    (foundPatient.name = req.body.name),
      (foundPatient.dob = req.body.dob),
      (foundPatient.address = req.body.address),
      (foundPatient.constituency = req.body.constituency),
      (foundPatient.diagnosis = req.body.diagnosis),
      (foundPatient.doa = req.body.doa);
    foundPatient.dod = req.body.dod;
    const updatedPatient = await foundPatient.save();
    res.json({ updatedPatient });
  }
};

const deletePatient = async (req, res) => {
  const foundPatient = await Patient.findById(req.params._id);
  if (foundPatient) {
    foundPatient.remove();
    res.json({ msg: `${foundPatient.name} removed` });
  } else {
    res.status(404).json({ error: "Patient not found" });
  }
};

module.exports = {
  createPatient,
  getAllPatients,
  getSinglePatient,
  updatePatient,
  deletePatient,
};
