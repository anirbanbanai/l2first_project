import { Router } from "express";
import { StudentsRoutes } from "../modules/students/student.route";
import { UserRouter } from "../modules/users/users.route";
import { AcademicSemestart } from "../modules/academicSemestar/academicSemicter.route";

const router = Router();

const moduleRouts = [
    {
        path:"/users",
        router: UserRouter
    },
    {
        path:"/student",
        router: StudentsRoutes
    },
    {
        path:"/academic-semester",
        router: AcademicSemestart
    }
];

moduleRouts.forEach((route)=>router.use(route.path, route.router))


export default router;