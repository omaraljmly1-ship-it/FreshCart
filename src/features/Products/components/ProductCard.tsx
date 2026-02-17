'use client'
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsRotate, faPlus, faStar } from "@fortawesome/free-solid-svg-icons"
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons'
import Link from "next/link"
import { Product } from "../types/product.types"
import { addToCart, getLoggedUserCart } from "../../cart/server/Cart.Action"
import { toast } from "react-toastify"
import { setCartInfo } from "../../cart/store/cart.slice"
import { useAppDispatch } from "@/src/store/store"
import { addProductToWishlist, getLoggedUserWishlist } from "../../wishList/server/wishlist.action"
import { setWishlistInfo } from "../../wishList/store/wishlist.slice"

export default function ProducCard({ info }: { info: Product }) {
    const dispatch = useAppDispatch()
    const handleAddToCart = async () => {
        try {
            const response = await addToCart({ productId: info.id })
            if (response.status === "success") {
                toast.success(response.message)
                const cartInfo = await getLoggedUserCart()
                dispatch(setCartInfo(cartInfo))

            }
        } catch (error: any) {
            toast.error(error.response.data.message)
        }

    }
    const handleAddToWishlist = async () => {
        try {
            const response = await addProductToWishlist({ productId: info.id })
            if (response.status === "success") {
                console.log(response)
                toast.success(response.message)
                const wishlistInfo = await getLoggedUserWishlist()
                console.log(wishlistInfo)
            }
        } catch (error: any) {
            console.log(error)
        }
    }

    return <>   
        <div className="w-70 border border-gray-200 p-2 rounded-lg shadow hover:shadow-xl transition-all relative">
            <Image src={info.images[0]} alt="" width={150} height={250} className=" m-auto"></Image>
            <div>

                <div className="font-semibold space-x-2">
                    <p className="text-sm text-gray-400">{info.category.name}</p>
                    <h2>{info.title}</h2>
                </div>
                <div className="flex gap-3 items-center pb-3">
                    <div >
                        <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                        <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                        <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                        <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                    </div>
                    <p className="text-sm text-gray-400">{info.ratingsAverage} <span>({info.ratingsQuantity})</span></p>
                </div>
                <div className="flex items-center justify-between font-semibold text-lg">
                    <div className="flex gap-1">
                        <p className="font-bold text-green-600 pe-3 text-xl">{info.priceAfterDiscount ? info.priceAfterDiscount : info.price} EGP</p>
                        {
                            info.priceAfterDiscount ? <p className="line-through font-semibold">{info.price}</p> : ""

                        }
                    </div>
                    <div className="w-10 h-10 rounded-full hover:bg-green-700 cursor-pointer text-white bg-green-600 flex justify-center items-center"
                        onClick={handleAddToCart}
                    >
                        <FontAwesomeIcon icon={faPlus} />

                    </div>
                </div>
            </div>
            <ul className=" absolute top-7 right-4 space-y-2">
                <li className="w-7 flex justify-center items-center rounded-full h-7 shadow-lg hover:text-red-600 cursor-pointer"
                    onClick={handleAddToWishlist}
                ><FontAwesomeIcon icon={faHeart} />

                </li>
                <li className="w-7 flex justify-center items-center rounded-full h-7 shadow-lg hover:text-green-600 cursor-pointer"><FontAwesomeIcon icon={faArrowsRotate} /></li>
                <li className="w-7 flex justify-center items-center rounded-full h-7 shadow-lg hover:text-green-600 cursor-pointer"><Link href={'/products/' + info._id}><FontAwesomeIcon icon={faEye} className=" z-10" /></Link></li>
            </ul>
            {
                info.priceAfterDiscount ? <div className="w-13 text-sm h-8 bg-red-500 text-white rounded-lg absolute top-2 text-center left-2 flex justify-content-center items-center"><p className="m-auto">-{((info.price - info.priceAfterDiscount) / info.price * 100).toFixed(0)}%</p></div> : ""

            }
        </div>
    </>
}