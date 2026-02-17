import Image from "next/image";
import loginImg from "../../../../assets/images/2e5810ff3e-e750761ebcd4ae5907db.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faShieldHalved, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
export default function LoginHero() {
    return <>

            <div className=" sm:hidden md:block">
                <Image src={loginImg} alt="login"
                    className="w-100 m-auto shadow-2xl py-4 rounded-2xl "
                />
                <div>
                    <h1 className="font-bold text-2xl text-center py-6">FreshCart - Your One-Stop Shop for Fresh Products</h1>
                    <p className="text-center font-bold text-gray-500">Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
                </div>

                <div className="flex justify-between my-5">
                    <div>
                       <FontAwesomeIcon icon={faTruckMoving}  className="text-green-600"/>
                       <span className="ms-2 text-gray-500 font-semibold">Free Delivery</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faShieldHalved} className="text-green-600" />
                        <span className="ms-2 text-gray-500 font-semibold">Secure Payments</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faClock} className="text-green-600" />
                        <span className="ms-2 text-gray-500 font-semibold">24/7 Support</span>
                    </div>
                </div>
            </div>

    </>
}