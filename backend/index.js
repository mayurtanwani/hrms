import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./src/routes/userRouter.js";
import employeeRouter from "./src/routes/employeeRouter.js";
import candidateRouter from "./src/routes/candidateRouter.js";
import attendanceRouter from "./src/routes/attendenceRouter.js";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(employeeRouter);
app.use(candidateRouter);
app.use(attendanceRouter);
app.use("/images", express.static("images"));
app.use("/resumes", express.static("resumes"));

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("error");
  });

app.listen(process.env.PORT, () => {
  console.log(`server is runnning at port ${process.env.PORT}`);
});
