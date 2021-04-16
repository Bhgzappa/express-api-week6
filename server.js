const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./configurations/connectDb");
const patientsRoute = require("./routes/patientsRoute");

dotenv.config();

const app = express();

connectDb();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/mps", patientsRoute);

app.get("/api/patients", (req, res) => {
  res.send("Welcome to my Patients api");
});

const PORT = 5000; //process.env.PORT;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));