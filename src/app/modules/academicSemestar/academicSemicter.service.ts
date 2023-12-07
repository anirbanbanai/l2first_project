import {  AcademicSemestarCode } from "./academecSemestar.interface";
import { AcademicSemestarModel } from "./academicSemicter.models";

const createAcadenicSenestartIntoDb = async(payload: AcademicSemestarCode)=>{
    const result = await AcademicSemestarModel.create(payload);
    return result
};


export const AcademicSemesterService = {
    createAcadenicSenestartIntoDb
}