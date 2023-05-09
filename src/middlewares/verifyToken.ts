import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(400).send("Access Denied!");
  try {
    const verified = jwt.verify(token, process.env.SECRET_TOKEN!);
    req.app.locals.user = verified;
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default verifyToken;
