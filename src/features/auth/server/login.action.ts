import { loginFormTypes, loginSchema } from "../schemas/login.schema";
import axios, { AxiosError } from "axios";


export async function loginAction(values:loginFormTypes){
    const validationResult = loginSchema.safeParse(values);
    if(!validationResult.success){


        const errors: Record<string, string> = {}
        if (validationResult.error) {
            validationResult.error.issues.forEach((issue) => {
                const field = issue.path[0] as string
                const message = issue.message

                if (!errors[field]) {
                    errors[field] = message
                }
            })
            return {
                success:false,
                message:"Invalid credentials",
                errors
            }
        }
    }

    try{
        const optnios = {
            url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
            method:"POST",
            data:values
        }
        const {data} = await axios.request(optnios);
        if(data.message === "success"){
            return {
                success:true,
                message:"User logged in successfully",
                data
            }
        }
        return {
            success:false,
            message:data.message || "Something went wrong",
        }
    }catch(error){
        if(error instanceof AxiosError){
            const errorMessage = error.response?.data?.message
            if(errorMessage === "Invalid credentials"){
                return {
                    success:false,
                    message:"Invalid credentials",
                    errors:{
                        email:"Invalid credentials"
                    }
                }
            }
        }
        return {
            success:false,
            message:"Server Error",
        }
    }
}