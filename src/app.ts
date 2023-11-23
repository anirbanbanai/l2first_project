import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentsRoutes } from './app/modules/students/student.route';
const app: Application = express();
// const port = 3000

app.use(express.json());
app.use(cors());

app.use('/v1', StudentsRoutes);

const getACon = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'Succcess',
    message: 'Welcome to my travel appsss',
  });
};

app.get('/', getACon);

export default app;
