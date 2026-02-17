"use client"
import { faArrowLeft, faEnvelope, faKey, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordFormTypes, forgotPasswordSchema, verifyResetCodeFormTypes, verifyResetCodeSchema } from "../../schemas/forgetpassword.schema";
import { forgotPasswordAction, verifyResetCodeAction } from "../../server/forgotPassword.action";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ForgotPasswordForm() {
    const [codeSent, setCodeSent] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<forgotPasswordFormTypes>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    })

    const onSubmit: SubmitHandler<forgotPasswordFormTypes> = async (values) => {
        try {
            const response = await forgotPasswordAction(values.email);
            console.log(response)
            if (response.statusMsg == "success") {
                toast.success(response.message);
                setCodeSent(true);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const { register: registerVerify, handleSubmit: handleSubmitVerify, formState: { errors: errorsVerify } } = useForm<verifyResetCodeFormTypes>({
        resolver: zodResolver(verifyResetCodeSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    })


    const onSubmitVerify: SubmitHandler<verifyResetCodeFormTypes> = async (values) => {
        try {
            const response = await verifyResetCodeAction(values.resetCode);
            console.log(response)
            if (response.statusMsg == "success") {
                toast.success(response.message)
            }
        } catch (error) {
            console.log(error as Error)
            toast.error((error as Error).message);
        }
    }
    return <>

        <div className=" shadow-lg p-5 rounded-lg">
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    <span className="text-[#16873f]">Fresh</span>Cart
                </h1>
                <h2 className="text-3xl font-bold py-2">Forgot your password?</h2>
                <p className="text-gray-500 font-semibold text-xl">No worries, we'll sent you a reset code to your email.</p>
            </div>
            <div className="flex items-center justify-center gap-10 my-5">
                <div className="bg-[#36b665] size-10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                </div>
                <div className="bg-[#36b665] size-10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faKey} className="text-white" />
                </div>
                <div className="bg-[#36b665] size-10 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faLock} className="text-white" />
                </div>
            </div>
            {
                codeSent ? <>

                    <form onSubmit={handleSubmitVerify(onSubmitVerify)}>
                        <label htmlFor="resetCode" className="block text-sm font-semibold text-gray-700 mb-2">Verification Code</label>
                        <input
                        type="text"
                        {...registerVerify("resetCode")}
                        id="resetCode" maxLength={6} className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all text-center text-2xl tracking-[0.5em] font-mono" placeholder="••••••" name="resetCode"></input>
                        {errorsVerify.resetCode?.message && <p className="text-red-500 text-sm mt-1">{errorsVerify.resetCode?.message}</p>}
                        <button type="submit"
                            className="w-full bg-[#16873f] text-white py-3 px-4 rounded-xl hover:bg-[#16a34a]/80 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer my-3">Verify Code</button>
                    </form>
                    <div className="my-5 border-b-2 border-gray-200 pb-5">
                        <Link href="/signin" className="text-[#16873f] cursor-pointer font-semibold text-center block"><FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to Sign In</Link>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 font-semibold text-xl">Remembered your password? <Link href="/signin" className="text-[#16873f] cursor-pointer font-semibold">Sign In</Link></p>
                    </div>
                </> : <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-5">
                            <label htmlFor="email" className="font-medium  ">Email Address</label>
                            <input type="email"
                                {...register("email")}
                                placeholder="Enter your email address" className="border-2 border-gray-200 font-medium px-3 py-2.5 rounded-md  w-full focus:outline-none focus:shadow shadow-green-300 text-gray-500 focus:border-[#1ddc63] transition-all duration-300 mt-2 " />
                            {errors.email?.message && <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>}
                        </div>
                        <div className="my-5">
                            <button className="bg-[#16873f] text-white font-bold px-3 py-2.5 rounded-md cursor-pointer w-full hover:bg-[#16a34a]/80 transition-all duration-300 ">Send Reset Code</button>
                        </div>
                    </form>
                    <div className="my-5 border-b-2 border-gray-200 pb-5">
                        <p className="text-[#16873f] cursor-pointer font-semibold text-center block"><FontAwesomeIcon icon={faArrowLeft} className="mr-2"/> Resend Code</p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 font-semibold text-xl">Remembered your password? <Link href="/signin" className="text-[#16873f] cursor-pointer font-semibold">Sign In</Link></p>
                    </div>
                </>
            }

        </div>
    </>
}