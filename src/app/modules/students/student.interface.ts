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
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  presentAdress: string;
  permanentAdrtess: string;
  guardian: Guardian;
  localGuardian?: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
