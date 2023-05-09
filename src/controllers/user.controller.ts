import { Response, Request } from "express";
import User from "../models/user.model";
import { hashing } from "../utils/hashing";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

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
  } finally {
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send({ message: "please use another email" });

    const valid = await compareSync(req.body.password, user!.password);
    if (!valid)
      return res.status(200).send({ message: "password is not match" });

    const token = jwt.sign({ email: user.email }, process.env.SECRET_TOKEN!);
    res.status(200).send({ accessToken: token });
  } catch (error) {
    console.log(error);
  }
};

const userController = { register, login };

export default userController;
