import { faEnvelope, faLock, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ForgotPasswordHero() {
    return <>
        <div className="shadow  p-2 rounded-xl">
            <div className="bg-green-100 rounded-3xl p-25 shadow">
                <div className="">
                    <div className="flex gap-3 justify-center items-center ">
                        <div className=" -rotate-12">
                            <div className=" shadow-2xl w-fit h-fit rounded-xl bg-white">
                                <FontAwesomeIcon icon={faEnvelope} className="text-green-600 text-2xl p-3" />
                            </div>
                        </div>
                        <div className=" w-30 h-30 shadow-2xl flex justify-center items-center rounded-2xl bg-white">
                            <div className="w-23 h-23 bg-green-100 flex justify-center items-center rounded-2xl">
                                <FontAwesomeIcon icon={faLock} className="text-green-600 text-6xl" />
                            </div>
                        </div>
                        <div className=" rotate-12">
                            <div className=" shadow-2xl w-fit h-fit rounded-xl bg-white ">
                                <FontAwesomeIcon icon={faUserShield} className="text-green-600 text-2xl p-3" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center pt-5">
                    <div className="w-3 h-3 bg-green-400 rounded-full">

                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full">

                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full">

                    </div>
                </div>
            </div>
            <div className=" space-y-4 py-8">
                <h2 className="text-3xl font-bold text-center">Reset Your Password</h2>
                <p className="text-center text-gray-600 font-semibold text-lg">Don't worry, it happens to the best of us. We'll help you get back into your account in no time.</p>
            </div>
            <ul className="space-y-2 flex justify-between pb-5">
                <li className="flex gap-2 items-center font-semibold"><FontAwesomeIcon icon={faEnvelope} className="text-green-600" /> Email Verification</li>
                <li className="flex gap-2 items-center font-semibold"><FontAwesomeIcon icon={faUserShield} className="text-green-600" />  Reset</li>
                <li className="flex gap-2 items-center font-semibold"><FontAwesomeIcon icon={faLock} className="text-green-600" />Encrypted </li>
            </ul>
        </div>
    </>
}