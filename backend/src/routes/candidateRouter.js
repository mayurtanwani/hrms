import express from "express";
import upload from "../middlewares/multer.js";
import {
  addCandidate,
  deleteCandidate,
  getCandidates,
  updateCandidate,
} from "../controllers/candidateController.js";

const candidateRouter = express.Router();

candidateRouter.post(
  "/candidate",
  upload.fields([
    { name: "resumes", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  addCandidate
);

candidateRouter.get("/candidates", getCandidates);
candidateRouter.put(
  "/candidates",
  upload.fields([
    { name: "resumes", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  updateCandidate
);
candidateRouter.delete("/candidate/:id", deleteCandidate);

export default candidateRouter;
