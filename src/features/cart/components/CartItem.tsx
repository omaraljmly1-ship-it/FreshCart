"use client"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { CartItem as ICartItem } from "../types/cart.type";
import { removeItemFromCart, updateProductQuantity } from "../server/Cart.Action";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import { useAppDispatch } from "@/src/store/store";
import { removeItem, setCartInfo } from "../store/cart.slice";

export default function CartItem({ products }: { products: ICartItem }) {
    const { product, price, count } = products
    const { title, imageCover, category, priceAfterDiscount, id } = product
    const dispatch = useAppDispatch()
    const handleRemoveItemFromCart = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        dispatch(removeItem({ id }))
        if (result.isConfirmed) {
            await removeItemFromCart(id)
            toast.success('Item removed from cart')
        }

    }

    const handleUpdate = async (newCount: number) => {
        if (newCount < 1) return ;
        if (newCount > product.quantity) return;

        try {
            const response = await updateProductQuantity(id, newCount)
            dispatch(setCartInfo(response))
            console.log(response)
            toast.success('Product quantity updated')
        } catch (error) {
            toast.error('Failed to update product quantity')
        }
    }


    return <>
        <div>
            <div className="">
                <div className="flex items-center gap-4 shadow p-2 rounded-md my-5">
                    <div>
                        <Link href={'/products/' + id}>
                            <Image src={imageCover} alt="" width={120} height={140} className="object-cover hover:scale-110 transition-all duration-300" />
                        </Link>
                    </div>
                    <div className=" space-y-3">
                        <h2 className="font-bold">{title}</h2>
                        <p className="font-semibold text-sm  by-2 px-3 bg-green-100 rounded-md w-fit">{category.name}</p>
                        <p className="font-bold text-2xl text-[#16873f]">{priceAfterDiscount ? priceAfterDiscount : price} EGP</p>

                        <div className="flex justify-between  gap-80">
                            <div className="">
                                <div className="flex items-center gap-4 border border-gray-200 rounded-md py-2 px-4">
                                    <button
                                    disabled={count === 1}
                                        onClick={() => handleUpdate(count - 1)}
                                        className=" font-sbold px-3 py-1 rounded-md shadow-md cursor-pointer">-</button>
                                    <p>{count}</p>
                                    <button
                                        disabled={count === product.quantity}
                                        onClick={() => handleUpdate(count + 1)}
                                        className="bg-[#16873f] text-white font-semibold px-3 py-1 rounded-md cursor-pointer">+</button>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <p className="font-bold text-2xl">{(priceAfterDiscount ? priceAfterDiscount : price) * count} </p>
                                <div className="font-semibold ">
                                    <p>Total</p>
                                    <p> EGP</p>
                                </div>
                                <p
                                    className="border border-red-500 w-10 h-10 bg-red-500/20 flex items-center justify-center rounded-md cursor-pointer text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                                    onClick={handleRemoveItemFromCart}
                                ><FontAwesomeIcon icon={faTrash} /></p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    </>
}