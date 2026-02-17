'use client'
import { faCartPlus, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { getLoggedUserWishlist, removeProductFromWishlist } from "../server/wishlist.action";
import { toast } from "react-toastify";
import { addToCart } from "../../cart/server/Cart.Action";
import { Product } from "../../Products/types/product.types";
import { useAppDispatch, useAppSelector } from "@/src/store/store";
import { setWishlistInfo } from "../store/wishlist.slice";
import { useEffect } from "react";

export default function WishlistDesine() {
    const { products } = useAppSelector((state) => state.wishlist)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const loadWishlist = async () => {
            try {
                const data = await getLoggedUserWishlist();
                dispatch(setWishlistInfo(data));
            } catch (error) {
                console.log(error);
            }
        };

        loadWishlist();
    }, [dispatch]);


    const handleAddToCart = async (id: string) => {
        try {
            const response = await addToCart({ productId: id })
            if (response.status === "success") {
                toast.success(response.message)
            }

        } catch (error: any) {
            toast.error(error.response.data.message)
        }

    }

    const handleRemoveItem = async (id: string) => {
        try {
            const response = await removeProductFromWishlist(id)
            if (response.status === "success") {
                toast.success(response.status)
            }
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }


    return <>
        <div className="container">
            <div className="flex items-center gap-3 py-10 border-b border-gray-200">
                <div className="w-15 h-15 bg-red-200/20 rounded-2xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faHeart} className="text-red-500 text-xl" />

                </div>
                <div>
                    <h1 className="text-2xl font-bold">My Wishlist</h1>
                    <p className="text-gray-500">{products.length} item saved</p>
                </div>
            </div>
            {products.map((product: Product) => (
                <div key={product._id} className="grid md:grid-cols-[2fr_1fr_1fr_1fr] p-5 my-5 shadow rounded-lg">
                    <div className="space-y-4 ">
                        <p className="font-semibold text-gray-500">product</p>
                        <div className="flex items-center gap-3">
                            <Image src={product.imageCover} alt={product.title} width={100} height={100} className="w-24 h-24 object-cover rounded-md" />
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold line-clamp-1" >{product.title}</h2>
                                <p className="text-gray-500 text-sm py-2 px-3 bg-green-200/30 rounded-lg w-fit">{product.category.name}</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <p className="font-semibold text-gray-500">Price</p>
                        <div>
                            {
                                product.priceAfterDiscount ? <p className="text-xl font-semibold">{product.priceAfterDiscount} EGP</p> : <p className="text-xl font-semibold">{product.price} EGP</p>
                            }
                            {
                                product.priceAfterDiscount ? <p className="line-through text-gray-500 text-sm">{product.price} EGP</p> : ""
                            }
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <p className="font-semibold text-gray-500">Status</p>
                        <div className=" bg-green-200/30 rounded-2xl py-2 text-green-500 text-sm  px-2 w-fit m-auto">
                            <p className="">In Stock</p>

                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <p className="font-semibold text-gray-500">Actions</p>
                        <div className="flex gap-2 items-center justify-center w-fit m-auto *:cursor-pointer">
                            <button onClick={() => handleAddToCart(product._id)} className="bg-[#16a34a] rounded-lg py-2 text-whit  px-3">
                                <p className=" text-white font-semibold"><span className="hidden lg:inline-block">Add </span> <FontAwesomeIcon icon={faCartPlus} /></p>

                            </button>
                            <button onClick={() => handleRemoveItem(product._id)} className="bg-gray-200 rounded-lg py-2 text-red-500 text-sm  px-3 hover:bg-red-500 hover:text-white hover:scale-105 transition-all ">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </>
}