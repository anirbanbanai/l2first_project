import catchAsync from "../../utils/catAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AcademicSemesterService } from "./academicSemicter.service";

const CreateAcademicSemestart = catchAsync(async(req,res)=>{

    const result = await AcademicSemesterService.createAcadenicSenestartIntoDb(req.body)

    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "successfull",
        data:result
    })
})


export const AcademicSemestartController = {
    CreateAcademicSemestart
}

