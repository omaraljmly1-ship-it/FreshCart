"use client"
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormTypes, loginSchema } from "../../schemas/login.schema";
import { loginAction } from "../../server/login.action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setToken } from "../../server/auth.action";
import { setAuthInfo } from "../../store/auth.slice";
import { useDispatch } from "react-redux";

export default function LoginForm() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<loginFormTypes>({
        defaultValues: {
            password: "",
            email: "",
            remember: false
        },
        resolver: zodResolver(loginSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    });

    const onSubmit: SubmitHandler<loginFormTypes> = async (values) => {
        try {
            const response = await loginAction(values);
            if (response.success) {
                await setToken(response.data.token, values.remember)
                dispatch(setAuthInfo({ isAuthenticated: true, userInfo: response.data.user }))
                toast.success(response.message);
                setTimeout(() => {
                    router.push('/');
                }, 1000)
            } else {
                if (response?.errors) {
                    Object.keys(response.errors).forEach((key) => {
                        setError(key as keyof loginFormTypes, {
                            message: response.errors[key]
                        })
                    })
                }
                toast.error(response.message);
            }
        } catch (error) {

            toast.error("Something went wrong");
        }
    }


    return <>
        <div className="">
            <div className="shadow-2xl p-4 rounded-2xl md:mx-5">
                <div className="text-center">
                    <h2 className="font-bold text-2xl py-1"><span className="text-green-600">Fresh</span>Cart</h2>
                    <h4 className="font-bold text-2xl">Welcome Back</h4>
                    <p className="py-1 font-semibold text-gray-400">Sign in to Continue your fresh shopping experience</p>
                </div>
                <div className="">
                    <button className="w-full border-2 my-3 hover:bg-green-100   border-gray-300 rounded-lg  py-2 hover:border-green-300 cursor-pointer"><FontAwesomeIcon icon={faGoogle} className="text-orange-600" /> Countinue with Google</button>
                    <button className="w-full  border-2 my-3 hover:bg-green-100  border-gray-300 rounded-lg py-2 hover:border-green-300 cursor-pointer"><FontAwesomeIcon icon={faFacebookF} className="text-blue-600" /> Countinue with Facebook</button>
                </div>
                <div className=" relative">
                    <p className="text-center text-gray-400 font-medium">OR CONTINUE WITH EMAIL </p>
                </div>
                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="email" className="">Email Address</label>
                        <div className=" relative">
                            <input type="email" id="email"
                                placeholder="Enter your email"
                                className="input focus:shadow focus:border-2 focus:shadow-green-200"
                                {...register('email')}
                            />
                            <FontAwesomeIcon icon={faEnvelope} className=" absolute left-1 top-3.5 text-gray-400" />

                        </div>
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="">
                        <div className="flex justify-between py-2 ">
                            <label htmlFor="password">Password</label>
                            <Link href={'/forgot-password'} className="text-right text-green-600">Forgot Password?</Link>
                        </div>
                        <div className=" relative">
                            <input type="password"
                                id="password"
                                placeholder="Enter your password "
                                className="input focus:shadow focus:border-2 focus:shadow-green-200"
                                {...register('password')}
                            />
                            <FontAwesomeIcon icon={faLock} className=" absolute left-1 top-3.5 text-gray-400" />
                        </div>
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <div className="flex gap-2 py-2" >
                        <input type="checkbox" {...register('remember')} id="keep" />
                        <label htmlFor="keep">Keep me Signed in</label>
                    </div>
                    <div className="border-b-2 border-gray-200 mb-1">
                        {
                            isSubmitting ? (
                                <button className=" cursor-not-allowed w-full text-white font-semibold bg-green-600 hover:bg-green-700 py-3 rounded-2xl mb-5  border-gray-200" disabled>Signing in...</button>
                            ) : (
                                <button className=" cursor-pointer w-full text-white font-semibold bg-green-600 hover:bg-green-700 py-3 rounded-2xl mb-5  border-gray-200">Sign in </button>
                            )
                        }
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-gray-400 font-semibold text-lg py-2" >Don't have an account? <Link href={'/signup'} className="text-green-600">Sign up</Link></p>
                </div>
                <ul className=" text-gray-400 flex justify-evenly py-5">
                    <li><FontAwesomeIcon icon={faLock} className="text-green-600" /> SSL Secured</li>
                    <li><FontAwesomeIcon icon={faUsers} className="text-green-600" /> 50K+ Users</li>
                    <li><FontAwesomeIcon icon={faStar} className="text-green-600" /> 4.9 Rating</li>
                </ul>
            </div>
        </div>
    </>
}