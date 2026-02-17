import ForgotPasswordForm from "../components/forgetPassword/ForgotPasswordForm";
import ForgotPasswordHero from "../components/forgetPassword/ForgotPasswordHero";

export default function ForgotPassword() {
    return <>
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-3 ">
            <div className=" lg:block mb-5">
                <ForgotPasswordHero/>
            </div>
            <div className="">
                <ForgotPasswordForm/>
            </div>
        </div>
    </div>
    </>
}