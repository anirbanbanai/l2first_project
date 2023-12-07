import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameShcema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, 'Max allowed is 20'],
  },
  middlename: { type: String },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherContact: { type: String },
  mothername: { type: String },
  motherContact: { type: String },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
  adress: { type: String },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    require: [true, 'ObjectId must be need'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: userNameShcema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
  },
  presentAdress: {
    type: String,
    required: true,
  },
  permanentAdrtess: {
    type: String,
    required: true,
  },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
});

export const StudentModel = model<Student>('Student', studentSchema);
