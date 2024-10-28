// routes/classroomRoutes.js
import { Router } from "express";
import {
	createClassroom,
	getClassrooms,
	getClassroomById,
	updateClassroom,
	deleteClassroom,
	getClassroomByName,
} from "../controllers/classroom.controller.js";

const classroomRouter = Router();

classroomRouter.route("/").post(createClassroom).get(getClassrooms);
classroomRouter
	.route("/:id")
	.get(getClassroomById)
	.put(updateClassroom)
	.delete(deleteClassroom);
//search by name
classroomRouter.route("/search/:name").get(getClassroomByName);
export default classroomRouter;
