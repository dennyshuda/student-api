import { Router, Request, Response } from "express";

const HealthRouter: Router = Router();

HealthRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello, this is root for Student API");
});

export default HealthRouter;
