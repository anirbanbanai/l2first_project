import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);

router.get('/get', StudentController.getAllStudent);

router.get('/:id', StudentController.getSingleStudent);

export const StudentsRoutes = router;
