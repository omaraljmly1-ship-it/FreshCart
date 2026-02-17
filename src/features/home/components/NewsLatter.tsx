"use client"
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope, faLeaf, faStar, faTag, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewsLatter() {
    return <>
        <div className="container">
            <div className="p-8 bg-linear-to-tl from-[#ecfdf5] to-[#f1fdfa] rounded-xl shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <div className="flex gap-3">
                            <div className=" size-12 rounded-xl bg-[#00bc9c] text-white flex justify-center items-center  shadow-green-200 shadow-lg">
                                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold capitalize">Newsletter</h2>
                                <p className="text-gray-500 font-medium text-sm m-0 p-0">50,000+ subscribers</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold py-2 max-w-[85%] lg:max-w-full">Get the Freshest Updates <span className="text-[#009966]">Delivered Free</span></h2>
                            <p className="text-gray-500 font-semibold text-xl">Weekly recipes, seasonal offers & exclusive member perks.</p>
                        </div>

                        <div className=" gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-white w-fit gap-2 flex rounded-2xl py-2 px-4 border border-green-200">
                                <div className="size-7 flex bg-green-100 rounded-full justify-center items-center">
                                    <FontAwesomeIcon icon={faLeaf} className="text-green-700" />
                                </div>
                                <p>Fresh Picks Weekly</p>
                            </div>
                            <div className="bg-white w-fit gap-2 flex rounded-2xl py-2 px-4 border border-green-200">
                                <div className="size-7 flex bg-green-100 rounded-full justify-center items-center">
                                    <FontAwesomeIcon icon={faTruck} className="text-green-700" />
                                </div>
                                <p>Free Delivery Codes</p>
                            </div>
                            <div className="bg-white w-fit gap-2 flex rounded-2xl py-2 px-4 border border-green-200">
                                <div className="size-7 flex bg-green-100 rounded-full justify-center items-center">
                                    <FontAwesomeIcon icon={faTag} className="text-green-700" />
                                </div>
                                <p>Members-Only Deals</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[3fr_1fr] gap-2">
                            <input type="email" placeholder="you@example.com" className="p-2 rounded-xl  focus:border-green-600 focus:outline-none focus:shadow-green-200 focus:shadow shadow border-2 border-gray-200" />
                            <button className="group py-3 px-4 rounded-2xl bg-linear-to-r from-[#009966] to-[#00bc9c] text-white hover:scale-105 transition-all hover:bg-linear-to-r hover:from-[#89e3d4] hover:to-[#00bc9c] cursor-pointer ">Subscribe
                                <FontAwesomeIcon icon={faArrowRight} className="ms-2 group-hover:translate-x-1 transition-all" />
                            </button>
                        </div>
                        <div>
                            <p className="text-gray-500 font-semibold text-sm">✨ Unsubscribe anytime. No spam, ever.</p>
                        </div>
                    </div>
                    <div className="bg-linear-to-bl from-[#152b38] to-[#15373b] p-7 rounded-2xl space-y-5">
                        <div>
                            <p className="border border-green-300 bg-green-300/15 py-2 px-3 rounded-2xl w-fit text-sm text-green-600 font-bold">📱 MOBILE APP</p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold py-2 text-white">Shop Faster on Our App</h2>
                            <p className="text-gray-500 font-semibold text-lg">Get exclusive deals, track orders & shop your favorites on the go.</p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex gap-2 items-center p-2 border-gray-600 border rounded-2xl bg-[#2e3744] hover:scale-105 transition-all cursor-pointer duration-300">
                                <FontAwesomeIcon icon={faApple} className="text-white text-2xl" />
                                <div>
                                    <p className="text-gray-500 font-semibold capitalize">Download on</p>
                                    <p className="text-white font-bold text-lg">App Store</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center p-2 border-gray-600 border rounded-2xl bg-[#2e3744] hover:scale-105 transition-all cursor-pointer duration-300">
                                <FontAwesomeIcon icon={faGooglePlay} className="text-white text-2xl" />
                                <div>
                                    <p className="text-gray-500 font-semibold capitalize">Get it on</p>
                                    <p className="text-white font-bold text-lg">Google Play</p>
                                </div>
                            </div>
                        </div>

                     <ul className=" text-sm flex gap-2 items-center">
                        <li className="text-amber-400">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </li>
                        <li className="text-gray-400 font-semibold">4.9 • 100K+ downloads</li>
                     </ul>
                    </div>
                </div>
            </div>
        </div>

    </>
}