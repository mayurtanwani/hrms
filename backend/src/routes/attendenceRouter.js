import express from "express";
import {
  addAttendance,
  getAllAttendance,
} from "../controllers/attendenceController.js";

const attendanceRouter = express.Router();

attendanceRouter.post("/attendance", addAttendance);
attendanceRouter.get("/getallattendance", getAllAttendance);

export default attendanceRouter;
