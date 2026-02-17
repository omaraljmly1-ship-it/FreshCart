"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import sliderImage from "../../../assets/images/home-slider-1.png"
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
    return <>
        <section className="relative">
            <Swiper
                className=" w-full h-[400px] "
                loop={true}
                spaceBetween={5}
                modules={[Navigation , Pagination , Autoplay]}
                navigation={{
                    nextEl: ".right-btn",
                    prevEl: ".left-btn",
                }}
                pagination={{clickable :true}}
                autoplay ={{delay:4000}}
            >
                <SwiperSlide
                    className="w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(22, 200, 88, 0.7),rgba(3, 113, 58, 0.7)), url(${sliderImage.src || sliderImage})`, // نستخدم .src في Next.js
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="container text-white flex  items-center h-full">
                        <div>
                            <h1 className="text-4xl font-bold mb-4 max-w-md">
                                Fresh Products Delivered to Your Door
                                {/* Premium Quality Guaranteed */}
                            </h1>
                            <p className="text-lg mb-4 font-semibold">
                                Get 20% off on your first order
                                {/* Fresh from farm to your table */}
                            </p>
                            <div className="flex gap-4 mt-8">
                                <Link href="" className="btn hover:scale-105 transition-all duration-300 bg-white text-blue-600 font-bold">
                                    Shop Now
                                </Link >
                                <Link href="" className="btn hover:scale-105 transition-all duration-300 bg-transparent border-2 border-white font-bold">
                                    Learn More
                                </Link >
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className="w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(22, 200, 88, 0.7),rgba(3, 113, 58, 0.7)), url(${sliderImage.src || sliderImage})`, // نستخدم .src في Next.js
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="container text-white flex  items-center h-full">
                        <div>
                            <h1 className="text-4xl font-bold mb-4 max-w-md">
                                Premium Quality Guaranteed
                            </h1>
                            <p className="text-lg mb-4 font-semibold">
                                Fresh from farm to your table
                            </p>
                            <div className="flex gap-4 mt-8">
                                <Link href="" className="btn hover:scale-105 transition-all duration-300 bg-white text-blue-600 font-bold">
                                    Shop Now
                                </Link >
                                <Link href="" className="btn hover:scale-105 transition-all duration-300 bg-transparent border-2 border-white font-bold">
                                    Learn More
                                </Link >
                            </div>
                        </div>
                    </div>
                </SwiperSlide >

                <SwiperSlide
                    className="w-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(22, 200, 88, 0.7),rgba(3, 113, 58, 0.7)), url(${sliderImage.src || sliderImage})`, // نستخدم .src في Next.js
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="container text-white flex  items-center h-full">
                        <div>
                            <h1 className="text-4xl font-bold mb-4 max-w-md">
                                Fast & Fresh Delivery
                            </h1>
                            <p className="text-lg mb-4 font-semibold">
                                Same Day delivery available
                            </p>
                            <div className="flex gap-4 mt-8">
                                <Link href="" className="btn hover:scale-105 transition-all duration-300 bg-white text-blue-600 font-bold">
                                    Shop Now
                                </Link >
                                <Link href="" className="btn hover:scale-105 transition-all duration-300 bg-transparent border-2 border-white font-bold">
                                    Learn More
                                </Link >
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <button className="left-btn  cursor-pointer absolute top-1/2 left-4 z-12 bg-white p-2 rounded-full hover:scale-105 transition-all duration-300 hover:bg-gray-200 hover:text-white">
                <FontAwesomeIcon className="text-green-600" icon={faAngleLeft} />
            </button>
            <button className="right-btn  cursor-pointer absolute top-1/2 right-4 z-12 bg-white p-2 rounded-full hover:scale-105 transition-all duration-300 hover:bg-gray-200 hover:text-white">
                <FontAwesomeIcon className="text-green-600" icon={faAngleRight} />
            </button>
        </section>
    </>
}