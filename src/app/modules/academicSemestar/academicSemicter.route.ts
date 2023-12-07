import express  from "express"
import { AcademicSemestartController } from "./academicSemicter.controller";
import { ValidateRequest } from "../../middleware/validateRequestHandle";
import { AcadmicSenestartValidation } from "./academicSemicter.validation";

const router  = express.Router()
router.post("/create-academicSemestar",ValidateRequest(AcadmicSenestartValidation.CreateAcademicSemesterValidationSchema), AcademicSemestartController.CreateAcademicSemestart);

export const AcademicSemestart = router;