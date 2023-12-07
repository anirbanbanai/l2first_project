import { z } from 'zod';

const UserNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20)
    .refine((value) => value.trim().length > 0, {
      message: "First name can't be empty after trimming",
    }),
  middlename: z.string(),
  lastName: z.string().min(1).max(50),
});

const GuardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherContact: z.string(),
  mothername: z.string(),
  motherContact: z.string(),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  adress: z.string(),
});

const StudentValidation = z.object({
  body: z.object({
    name: UserNameValidationSchema,
    gender: z.enum(['male', 'female', 'others']),
    dateOfBirth: z.string(),
    email: z.string().email(),
    contactNo: z.string(),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']),
    presentAdress: z.string(),
    permanentAdrtess: z.string(),
    guardian: GuardianValidationSchema,
    localGuardian: LocalGuardianValidationSchema,
    profileImg: z.string()
  }),
});

export const StudentValidationSchema = {
  StudentValidation,
};
