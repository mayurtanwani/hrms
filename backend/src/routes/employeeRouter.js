import express from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
  showOneEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";
import upload from "../middlewares/multer.js";

const employeeRouter = express.Router();

employeeRouter.post(
  "/employees",
  upload.fields([
    { name: "resumes", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  addEmployee
);
employeeRouter.get("/employees", getEmployees);
employeeRouter.put(
  "/employees",
  upload.fields([
    { name: "resumes", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  updateEmployee
);
employeeRouter.delete("/employee/:id", deleteEmployee);
employeeRouter.get("/employee/:id", showOneEmployee);

export default employeeRouter;
