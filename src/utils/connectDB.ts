import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.DB!)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
