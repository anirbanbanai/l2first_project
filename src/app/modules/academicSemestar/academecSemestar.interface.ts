export type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type AcademicSemestarName = 'Atumn' | 'Summer' | 'Fall'
export type AcademicSemestarCode = '01' | '02' | '03'

export type AcademicSemestar = {
  name: AcademicSemestarName;
  code: AcademicSemestarCode;
  year: string;
  startMounth: TMonth;
  endMounth: TMonth;
};
