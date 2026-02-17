"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema, signupFormType } from "../../schemas/signup.schema";
import { signupAction } from "../../server/signup.actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setTimeout } from "timers";
import { AxiosError } from "axios";

export default function SignupForm() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors,isSubmitting }, setError } = useForm<signupFormType>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phoneNumber: "",
            terms: false
        },
        resolver: zodResolver(signupSchema),
        mode: "onSubmit",
        reValidateMode: "onChange",


    })
    const onSubmit: SubmitHandler<signupFormType> = async (values) => {
        try {
            const response = await signupAction(values)
            console.log(response)
            if (response?.success) {
                toast.success(response.message)
                setTimeout(() => {
                    router.push("/signin")
                }, 2000)
            } else {
                if (response?.errors) {
                    Object.keys(response.errors).forEach((key) => {
                        setError(key as keyof signupFormType, { message: response.errors[key] })
                    })
                }
            }
        } catch (error) {
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
            return{
                success:false,
                message:"Something went wrong",
            }
        }
    }

    return <>
        <div className=" sm:mt-10">

            <div className="p-3 shadow-2xl mx-4 space-y-5 rounded-lg">
                <div className="text-center py-2">
                    <h2 className="font-bold text-2xl">Create your Account</h2>
                    <p className="text-gray-700 font-medium py-2">start your fresh journey with us today</p>
                </div>
                <div className=" flex gap-2 ">
                    <button className="flex gap-2 items-center justify-center btn w-full">
                        <FontAwesomeIcon icon={faGoogle}
                            className="text-orange-600" />
                        <span className="font-medium">Google</span>
                    </button>
                    <button className="flex gap-2 items-center justify-center btn w-full">
                        <FontAwesomeIcon icon={faFacebookF}
                            className="text-blue-500"
                        />
                        <span className="font-medium">Facebook</span>
                    </button>
                </div>
                <div>
                    <p className="text-center font-medium">or</p>
                </div>
                <form className="pb-5 mb-5 border-b border-gray-400/50 space-y-2 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                        <label htmlFor="name" className=" inline-block">Name*</label>
                        <input type="text" id="name" placeholder="Omar"
                            className="input"
                            {...register("name")}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className=" inline-block">Email*</label>
                        <input type="email" id="email" placeholder="omar@gmail.com" className="input"
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className=" inline-block">Password*</label>
                        <input type="password" id="password" placeholder="********" className="input"
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="confirm-password" className=" inline-block">Confirm Password*</label>
                        <input type="password" id="confirm-password" placeholder="********" className="input"
                            {...register("rePassword")}
                        />
                        {errors.rePassword && <p className="text-red-500">{errors.rePassword.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className=" inline-block">Phone Number*</label>
                        <input type="number" id="phone" placeholder="123456789" className="input"
                            {...register("phoneNumber")}
                        />
                        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
                    </div>
                    <div className=" py-3 flex items-center gap-2 ">
                        <input type="checkbox" id="terms" {...register("terms")} />
                        <label htmlFor="terms" className=" inline-block">I agree to the <a href="" className="text-green-600 font-medium">terms of Service </a>and <a href="" className="text-green-600 font-medium">privacy policy</a></label>
                    </div>
                    {errors.terms && <p className="text-red-500 pb-2">{errors.terms.message}</p>}
{
    isSubmitting ? (
        <button className="btn bg-green-600 text-white w-full cursor-not-allowed"  disabled>
            <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
            Creating Account...
        </button>
    ) : (
        <button className="btn bg-green-600 text-white w-full" type="submit">
            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
            Create My Account
        </button>
    )
}
                </form>
                <p className="text-center py-2">Already have an account? <a href="" className="text-green-600 font-medium">Sign in</a></p>
            </div>
        </div>
    </>;
}