import cors from 'cors';
import express, { Application, RequestHandler } from 'express';
// import { StudentsRoutes } from './app/modules/students/student.route';
// import { UserRouter } from './app/modules/users/users.route';
import { notFound } from './app/middleware/notFounds';
import router from './app/router';
const app: Application = express();
// const port = 3000

app.use(express.json());
app.use(cors());

app.use('/v1', router);
app.use(notFound)

const getACon: RequestHandler = (req, res) => {
  res.status(200).json({
    status: 'Succcess',
    message: 'Welcome to my travel appsss',
  });
};

app.get('/', getACon);

export default app;
