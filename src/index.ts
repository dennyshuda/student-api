import express, { Application, Request, Response } from "express";
import cors from "cors";
import "./utils/connectDB";
import StudentRouter from "../src/routes/student.route";
import HealthRouter from "./routes/health.route";
import UserRouter from "./routes/user.route";

const PORT: Number = 8000;
const app: Application = express();

app.use(cors());
app.use(express.json());

app.use(HealthRouter);
app.use(StudentRouter);
app.use(UserRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
