import mongoose from "mongoose";
import Employee from "./employeeModel.js";

const attendanceSchema = mongoose.Schema({
  eid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },

  starttime: {
    type: String,
  },

  endtime: {
    type: String,
  },

  status: {
    type: String,
  },
});

const Attendance = mongoose.model("attendance", attendanceSchema);

export default Attendance;
