"use server"
import { signupFormType, signupSchema } from "../schemas/signup.schema";
import axios, { AxiosError } from "axios";
export async function signupAction(values: signupFormType) {
    const validationResult = signupSchema.safeParse(values)
    if (!validationResult.success) {
        const errors: Record<string, string> = {}
        if (validationResult.error) {
            validationResult.error.issues.forEach((issue) => {
                const field = issue.path[0] as string
                const message = issue.message

                if (!errors[field]) {
                    errors[field] = message
                }
            })
        }
        return{
            success:false,
            message:"Validation Error",
            errors

        }
    }

 try{
    const optnios = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signup",
        method: "POST",
        data: values
    }
    
    const {data} = await axios.request(optnios)

    if(data.message === "success"){
        return{
            success:true,
            message:"User Created Successfully",
            data
        }
    }
    return{
        success:false,
        message:data.message||"Something went wrong",
    }
    
 }catch(error){
                if (error instanceof AxiosError) {
                const errorMessage = error.response?.data?.message
                if (errorMessage === "Account Already Exists") {
                   return{
                    success:false,
                    message:"Account Already Exists",
                    errors:{
                        email:"Account Already Exists"
                    }
                   }
                }
            }
        return {
            success: false,
            message:  "Server Error",
        };
 }
}