import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  address: {
    type: String,
  },

  language: {
    type: String,
  },
  eid: {
    type: String,
  },

  position: {
    type: String,
  },

  image: {
    type: String,
  },

  resumes: {
    type: String,
  },

  doj: {
    type: String,
  },

  status: {
    type: String,
  },

  salary: {
    type: String,
  },

  email: {
    type: String,
  },
  contact: {
    type: String,
  },

  dor: {
    type: String,
  },

  department: {
    type: String,
  },

  dob: {
    type: String,
  },
  annualpay: {
    type: String,
  },
});

const Employee = mongoose.model("employee", employeeSchema);

export default Employee;
