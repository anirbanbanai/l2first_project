import { Types } from "mongoose";

export type Guardian = {
  fatherName: string;
  fatherContact: string;
  mothername: string;
  motherContact: string;
};

export type UserName = {
  firstName: string;
  middlename: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  adress: string;
};

export type Student = {
  id: string;
  user: Types.ObjectId;
  name: UserName;
  gender: 'male' | 'female' | "others";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  presentAdress: string;
  permanentAdrtess: string;
  guardian: Guardian;
  localGuardian?: LocalGuardian;
  profileImg?: string;
};
