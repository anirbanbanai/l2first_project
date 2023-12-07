import config from '../../config';
import { Student } from '../students/student.interface';
import { StudentModel } from '../students/student.models';
import {  TUser } from './users.interface';
import { User } from './users.mdels';

const createStudentintoDb = async (password: string, studentData: Student) => {
  const  userData: Partial<TUser> = {};

  userData.password = password || (config.DEFAULT_PASS as string);
  userData.role = 'student';
  userData.id = "09888754rtertr";

  const NewUser = await User.create(userData);
  if(Object.keys(NewUser).length){
    studentData.id = NewUser.id;
    studentData.user = NewUser._id;
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }

};

export const UserService = {
  createStudentintoDb,
};
