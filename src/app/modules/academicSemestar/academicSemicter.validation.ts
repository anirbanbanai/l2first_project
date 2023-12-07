import { z } from "zod";
import { AcademicSemestarCodes, AcademicSemestarNames, Months } from "./academicSemicter.const";

 const CreateAcademicSemesterValidationSchema = z.object({
    body: z.object({
        name: z.enum([ ...AcademicSemestarNames] as [string, ...string[]]),
        year: z.string(),
        code: z.enum([...AcademicSemestarCodes] as [string, ...string[]]),
        startMounth: z.enum([...Months] as [string,...string[]]),
        endMounth: z.enum([...Months] as [string,...string[]])
    })
})


export const AcadmicSenestartValidation = {
    CreateAcademicSemesterValidationSchema
}