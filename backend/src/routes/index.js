const { Router } = require("express");
const {
  patientCreate,
  patientListCpf,
  patientUpdate,
  healthInsuranceCreate,
  healthInsuranceList,
  healthInsuranceUpdate,
} = require("../controllers");
const { doctorCreate } = require("../controllers/doctor/create");
const routes = Router();

routes.post("/patientCreate", patientCreate);
routes.get("/patientListCpf", patientListCpf);
routes.put("/patientUpdate/:id", patientUpdate);

routes.post("/healthInsuranceCreate", healthInsuranceCreate);
routes.get("/healthInsuranceList", healthInsuranceList);
routes.put("/healthInsuranceUpdate/:id", healthInsuranceUpdate);
routes.post("/doctor/create", doctorCreate);
module.exports = routes;
