import { Router } from "express";
import studentController from "../controllers/students.controller";
import verifyToken from "../middlewares/verifyToken";
const StudentRouter = Router();

StudentRouter.get("/students", studentController.getStudents);
StudentRouter.post("/students", verifyToken, studentController.addStudent);
StudentRouter.get("/student/:id", studentController.getStudentById);
StudentRouter.put(
  "/student/:id",
  verifyToken,
  studentController.updateStudentById
);
StudentRouter.delete(
  "/student/:id",
  verifyToken,
  studentController.deleteStudentById
);

export default StudentRouter;
