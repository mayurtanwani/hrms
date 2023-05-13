import mongoose from "mongoose";

const candidateSchema = mongoose.Schema({
  firstname: {
    type: String,
  },

  educationyear: {
    type: String,
  },

  education: {
    type: String,
  },

  lastname: {
    type: String,
  },

  technology: {
    type: String,
  },

  image: {
    type: String,
  },

  skills: {
    type: String,
  },

  experience: {
    type: String,
  },

  recentemployer: {
    type: String,
  },

  portfoliolink: {
    type: String,
  },

  resumes: {
    type: String,
  },

  email: {
    type: String,
  },

  status: {
    type: String,
  },
});

const Candidate = mongoose.model("candidate", candidateSchema);

export default Candidate;
