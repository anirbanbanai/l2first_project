import { UserService } from './users.service';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: StudentData } = req.body;
  //   const zodPerseData = StudentValidationSchema.parse(StudentData);
  const result = await UserService.createStudentintoDb(password, StudentData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
