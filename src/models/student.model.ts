import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Students", studentSchema);
