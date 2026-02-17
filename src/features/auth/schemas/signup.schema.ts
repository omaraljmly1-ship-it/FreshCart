import {z} from "zod";

export const signupSchema = z.object({
    name:z.string()
    .nonempty("Name is required")
    .min(3,"Name must be at least 3 characters long"),
    email:z.string()
    .nonempty("Email is required")
    .pipe(z.email("Invalid email address")),
    password:z.string()
    .nonempty("Password is required")
    .min(6,"Password must be at least 6 characters long")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"),
    rePassword:z.string()
    .nonempty("Confirm Password is required")
    .min(6,"Confirm Password must be at least 6 characters long"),
    phoneNumber:z.string()
    .min(10,"Phone Number must be at least 10 digits long")
    .regex(/^(01)[0-9]{9}$/,"Egyptian Phone Number must start with 01 and be 11 digits long"),
    terms:z.boolean().refine((value)=>value === true,"You must agree to the terms and conditions")
}).refine((data)=>data.password === data.rePassword,{
    message:"Passwords do not match",
    path:["rePassword"]
})

export type signupFormType = z.infer<typeof signupSchema>