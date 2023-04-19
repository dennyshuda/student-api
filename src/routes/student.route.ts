import { Router } from "express";
import studentController from "../controllers/students.controller";
const StudentRouter = Router();

StudentRouter.get("/students", studentController.getStudents);
StudentRouter.post("/students", studentController.addStudent);
StudentRouter.get("/student/:id", studentController.getStudentById);
StudentRouter.put("/student/:id", studentController.updateStudentById);
StudentRouter.delete("/student/:id", studentController.deleteStudentById);

export default StudentRouter;
