import { Response, Request } from "express";
import User from "../models/user.model";
import { hashing } from "../utils/hashing";

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const data = new User({
    name,
    email,
    password: hashing(password),
  });
  try {
    const newUser = await data.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const userController = { register };

export default userController;
