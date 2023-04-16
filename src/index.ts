import express, { Application, Request, Response } from "express";
import { HealthRouter } from "./routes/health.route";

const PORT: Number = 8000;
const app: Application = express();

app.use(HealthRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
