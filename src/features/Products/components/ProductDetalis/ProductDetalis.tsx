'use client'
import { Product } from "../../types/product.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faBolt, faCartPlus, faShareAlt, faShieldAlt, faStar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


export default function ProductDetalis({ product }: { product: Product }) {
    const { title, description, price, images, category, brand, ratingsAverage, ratingsQuantity, quantity, priceAfterDiscount } = product
    const [count, setCount] = useState(1)
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 5], [0, 600]);
    return <>
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3 ">
                <div className="shadow-lg p-2 rounded-lg my-2 ">
                    <motion.div
                        style={{ y }}
                    >
                        <ImageGallery
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showNav={false}
                            items={images.map((image) => ({ original: image, thumbnail: image }))}/>
                    </motion.div>
                </div>
                <div className=" space-y-5 shadow-lg rounded-lg my-2 p-8">
                    <div className="flex gap-3">
                        <Link href={`/category/${category.slug}`} className="text-green-500 font-semibold bg-green-500/10 px-3 py-1 rounded-xl">{category.name}</Link>
                        <p className="bg-gray-300 px-3 py-1 rounded-2xl">{brand.name}</p>
                    </div>
                    <div className="text-2xl font-bold">
                        <p>{title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="font-bold text-sm">{ratingsAverage}</p>
                        <p className="text-gray-500 text-sm">( {ratingsQuantity} Reviews )</p>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <p className="text-3xl font-bold">{priceAfterDiscount ? priceAfterDiscount : price} EGP</p>
                        {priceAfterDiscount ? <p className="line-through font-bold text-gray-500 text-lg">{price} EGP</p> : ""}
                        {priceAfterDiscount ? <div className="w-25 text-sm h-8 bg-red-500 text-white rounded-2xl py-1 px-2.5  text-center  flex justify-content-center items-center"><p className="m-auto">Save -{((price - priceAfterDiscount) / price * 100).toFixed(0)}%</p></div> : ""}
                    </div>
                    <div className="border-b pb-5 border-gray-200">
                        <p>{quantity > 0 ? <>
                            <p className="bg-green-100 w-fit px-3 py-1 text-green-500 rounded-xl">Instock</p>
                        </> : <>
                            <p className="bg-red-100 w-fit px-3 py-1 text-red-500 rounded-xl">Out of Stock</p>
                        </>}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-lg font-semibold">{description}</p>
                    </div>
                    <div>
                        <p className="font-semibold py-2 text-gray-500">Quantity</p>
                        <div className="flex gap-3">
                            <div className="flex  items-center gap-12 border border-gray-200 rounded-lg w-fit ">
                                <button className=" cursor-pointer text-2xl hover:bg-gray-200 hover:text-green-500 transition-all px-5 py-3 " onClick={() => setCount(count + 1)} disabled={count === quantity}>+</button>
                                <input type="number"
                                    min={1}
                                    max={quantity}
                                    value={count}
                                    onChange={(e) => setCount(Number(e.target.value))}

                                />
                                <button className=" cursor-pointer text-2xl hover:bg-gray-200 hover:text-green-500 transition-all px-5 py-3" onClick={() => setCount(count - 1)} disabled={count === 1}>-</button>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <p className="font-semibold text-gray-500">Available :</p>
                                <p className="text-[#16a34a] font-bold">{quantity - count}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between  items-center py-3 px-2 bg-gray-200/20 rounded-lg ">
                        <p className="font-semibold text-gray-500">Total Price :</p>
                        <p className="text-4xl font-bold text-[#16a34a]">{(priceAfterDiscount ? priceAfterDiscount : price) * count} EGP</p>
                    </div>

                    <div className="flex gap-2 text-white *:cursor-pointer">
                        <button className=" w-full border border-gray-200 rounded-lg py-3 bg-[#16a34a] hover:bg-[#13833c] transition-all"><FontAwesomeIcon icon={faCartPlus} /> Add To Cart</button>
                        <button className=" w-full border border-gray-200 rounded-lg py-3 bg-[#101828] hover:bg-[#1b273e] transition-all"><FontAwesomeIcon icon={faBolt} />Buy Now</button>
                    </div>
                    <div className="flex gap-3 *:hover:border-green-500 *:hover:text-green-500 *:transition-all *:cursor-pointer border-b border-gray-200 pb-8">
                        <button className="w-full border border-gray-200 rounded-lg py-3 "><FontAwesomeIcon icon={faHeart} /> Add To Wishlist</button>
                        <button className=" border border-gray-200 rounded-lg py-3 px-3 "><FontAwesomeIcon icon={faShareAlt} /></button>
                    </div>
                    <div className="flex justify-between " >
                        <div className="flex items-center gap-3">
                            <div className="bg-green-400/20 p-2 rounded-full w-8 h-8 flex justify-center items-center">
                                <FontAwesomeIcon icon={faTruck} className="text-green-700" />
                            </div>
                            <div className=" *:font-semibold text-gray-500">
                                <p>Free Delivery</p>
                                <p>Order over 100 EGP</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-green-400/20 p-2 rounded-full w-8 h-8 flex justify-center items-center">
                                <FontAwesomeIcon icon={faArrowRotateLeft} className="text-green-700" />
                            </div>
                            <div className=" *:font-semibold text-gray-500">
                                <p>30 Days Return</p>
                                <p>Money back</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-green-400/20 p-2 rounded-full w-8 h-8 flex justify-center items-center">
                                <FontAwesomeIcon icon={faShieldAlt} className="text-green-700" />
                            </div>
                            <div className=" *:font-semibold text-gray-500">
                                <p>Secure Payment</p>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}