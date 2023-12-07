import { Schema, model } from "mongoose";
import { AcademicSemestar } from "./academecSemestar.interface";
import { AcademicSemestarCodes, AcademicSemestarNames, Months } from "./academicSemicter.const";



const academisSemnestarSchema  = new Schema<AcademicSemestar>({
    name: {
        type: String,
        require: true,
        enum:AcademicSemestarNames
    },
    year: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true,
        enum: AcademicSemestarCodes
    },
    startMounth: {
        type: String,
        enum: Months
    },
    endMounth: {
        type: String,
        enum: Months
    }
},
{
    timestamps: true
})

academisSemnestarSchema.pre("save", async function(next){
    const isSemesterExits = await AcademicSemestarModel.findOne({
        year: this.year,
        name: this.name,
    })

    if(isSemesterExits){
        throw new Error("Semester is already exists!")
    }
    next()
})

export const AcademicSemestarModel = model<AcademicSemestar>("AcademicSemestar", academisSemnestarSchema)