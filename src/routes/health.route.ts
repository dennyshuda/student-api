import { Router, Request, Response } from "express";

export const HealthRouter: Router = Router();

HealthRouter.get("/health", (req: Request, res: Response) => {
  res.status(200).send({ status: 200 });
});
