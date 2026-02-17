
import { faCheck, faLock, faTag, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function CartSummary({ numOfCartItems, totalCartPrice }: { numOfCartItems: number, totalCartPrice: number }) {

    return <>
        {/* <div className="shadow rounded-md">
            <div className="bg-[#101828]  rounded-md">
                <h2 className="text-2xl font-bold text-white p-5">Order Summary </h2>
            </div>
            <div className="p-5 ">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-500 text-lg">Subtotal ({numOfCartItems} items)</p>
                    <p className="font-bold text-[#16873f] text-xl">{totalCartPrice} EGP</p>
                </div>
                <div className="flex items-center justify-between py-3">
                    <p className="text-gray-500 font-bold text-xl">Shipping</p>
                    <p className="font-semibold text-[#2d9654] text-xl">Calculated at checkout</p>
                </div>
                <div className="flex items-center justify-between py-3">
                    <p className="text-gray-500 font-bold text-xl">Estimated Total</p>
                    <p className="font-bold text-[#2d9654] text-xl">{totalCartPrice} EGP</p>
                </div>
                <div>
                    <Link href="/signin">
                        <button className="bg-[#16873f] text-white font-bold px-3 py-2.5 rounded-md cursor-pointer w-full hover:bg-[#16873f]/80 transition-all duration-300 mt-5 "><FontAwesomeIcon icon={faUser} /> Login to Checkout</button>
                    </Link>
                </div>
                <div className="text-center border-b-2 border-gray-200 pb-5">
                    <p className="text-gray-400 font-semibold py-2">Don't have an account? <Link href="/signup" className="text-[#16873f] cursor-pointer font-semibold">Sign Up</Link></p>
                </div>
                <ul className="space-y-2 *:text-sm  py-2 *:text-gray-500">
                    <li><FontAwesomeIcon icon={faCheck} /> Your cart items will be saved</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Track your orders easily</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Access exclusive member deals</li>
                </ul>
            </div>
        </div> */}

        <div className="shadow rounded-md">
            <div className="bg-[#101828]  rounded-md">
                <h2 className="text-2xl font-bold text-white p-5">Order Summary </h2>
            </div>

            <div>
                {
                    totalCartPrice >= 450 ?
                        <p className="text-gray-500 font-bold text-xl p-5"><FontAwesomeIcon icon={faTruck} className="text-green-600" /> Shipping: Free</p> :
                        <p className="text-gray-500 font-bold text-xl p-5"><FontAwesomeIcon icon={faTruck} className="text-amber-600" /> Add {450 - totalCartPrice} EGP to get free shipping</p>
                }

            </div>

            <div className="p-5 ">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-500 text-lg">Subtotal ({numOfCartItems} items)</p>
                    <p className="font-bold text-[#16873f] text-xl">{totalCartPrice} EGP</p>
                </div>
                <div className="flex items-center justify-between py-3">
                    <p className="text-gray-500 font-bold text-xl">Shipping</p>
                    <p className="font-semibold text-[#2d9654] text-xl">{
                        totalCartPrice >= 450 ? "Free" : "50 EGP"
                    }</p>
                </div>
                <div className="flex items-center justify-between py-3">
                    <p className="text-gray-500 font-bold text-xl">Estimated Total</p>
                    <p className="font-bold text-[#2d9654] text-xl">{totalCartPrice} EGP</p>
                </div>
                <div>

                    <button
                        className="border border-gray-200 font-medium px-3 py-2.5 rounded-md cursor-pointer w-full text-gray-500 hover:border-[#16873f] hover:bg-[#16873f]/20 transition-all duration-300 mt-5 " >
                        <FontAwesomeIcon icon={faTag} />
                        Apply Promo Code
                    </button>
                </div>
                <div>
                    <Link href="/payment">
                        <button className="bg-[#16873f] text-white font-bold px-3 py-2.5 rounded-md cursor-pointer w-full hover:bg-[#16873f]/80 transition-all duration-300 mt-5 "><FontAwesomeIcon icon={faLock} /> Secure Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
}