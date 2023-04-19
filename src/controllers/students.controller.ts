import { Response, Request } from "express";
import Student from "../models/student.model";

const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const addStudent = async (req: Request, res: Response) => {
  const data = new Student(req.body);
  try {
    const newStudent = await data.save();
    res.status(201).send(newStudent);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const getStudentById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const data = await Student.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const updateStudentById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const data = await Student.updateOne({ _id: id }, { $set: req.body });
    res.status(200).send("success update");
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const deleteStudentById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const data = await Student.findByIdAndDelete(id);
    res.status(200).send("success delete");
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const studentController = {
  getStudents,
  addStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};

export default studentController;
