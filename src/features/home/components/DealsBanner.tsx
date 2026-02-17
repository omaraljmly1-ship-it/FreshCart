import { faArrowRight, faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function DealsBanner() {

    return <>
        <div className="container">
            <div className="grid grid-cols lg:grid-cols-2 gap-4 py-5 my-4">
                <div className="bg-linear-to-br from-[#00ba7b] to-[#007c56] px-5 rounded-lg text-white py-10 space-y-3 relative overflow-hidden">
                    <p className="font-semibold bg-gray-50/90 text-gray-500 w-fit px-2 rounded-xl"><span><FontAwesomeIcon icon={faFire} className="text-[#e7783c] " />Deal of the Day</span></p>
                    <h2 className="text-4xl font-bold ">fresh Orgainc Frutis</h2>
                    <p className="opacity-70 font-semibold text-lg">Get up to 40% off on selected organic fruits</p>
                    <p ><span className="text-2xl font-bold inline-block pe-2">40% OFF</span><span className=" opacity-70"> Use code:</span> <span className="font-semibold inline-block ps-1">ORGANIC40</span> </p>
                    <Link
                        href={''}
                        className="w-fit border py-2 px-5 rounded-xl flex items-center gap-1 bg-white text-[#007c56] hover:bg-gray-200 hover:scale-105 duration-100 transition-all"
                    >Shop Now
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <div className="w-25 h-25 absolute bg-green-100/90 rounded-full -top-10 -right-10 opacity-20"></div>
                    <div className="w-25 h-25 absolute bg-green-100/90 rounded-full -bottom-10 -left-10 opacity-20"></div>

                </div>
                <div className="bg-linear-to-br from-[#ff870f] to-[#ff2a54] px-5 rounded-lg text-white py-10 space-y-3 relative overflow-hidden">
                    <p className="font-semibold  bg-gray-50/90 text-gray-500 w-fit px-2 rounded-xl"><span><FontAwesomeIcon icon={faFire} className="text-[#e7783c] " />New Arrivals</span></p>
                    <h2 className="text-4xl font-bold ">Exotic Vegetables</h2>
                    <p className="opacity-70 font-semibold text-lg">Discover our latest collection of premium vegetables</p>
                    <p ><span className="text-2xl font-bold inline-block pe-2">25% OFF</span><span className=" opacity-70"> Use code:</span> <span className="font-semibold inline-block ps-1">FRESH25</span> </p>
                    <Link
                        href={''}
                        className="w-fit border py-2 px-5 rounded-xl flex items-center gap-1 bg-white text-[#ff2a54] hover:bg-gray-200 hover:scale-105 duration-100 transition-all"
                    >Explore Now
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <div className="w-25 h-25 absolute bg-green-100/90 rounded-full -top-10 -right-10 opacity-20"></div>
                    <div className="w-25 h-25 absolute bg-green-100/90 rounded-full -bottom-10 -left-10 opacity-20"></div>

                </div>
            </div>
        </div>
    </>
}