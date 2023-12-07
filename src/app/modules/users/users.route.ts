import express from 'express';
import { UserController } from './users.controller';

import { StudentValidationSchema } from '../students/student.validation';
import { ValidateRequest } from '../../middleware/validateRequestHandle';

const router = express.Router();



router.post(
  '/users/create-student',
  ValidateRequest(StudentValidationSchema.StudentValidation),
  UserController.createStudent,
);

export const UserRouter = router;
