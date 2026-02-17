
"use client"
import { useAppSelector } from "@/src/store/store";
import { faArrowLeft, faBoxOpen, faCartPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItem from "../components/CartItem";
import { CartItem as ICartItem } from "../types/cart.type";
import CartSummary from "../components/CartSummary";
import Link from "next/link";
export default function CartScreen() {

    const { totalCartPrice, numOfCartItems, products } = useAppSelector((state) => state.cart)
    console.log(products)
    return <>

        <div className="container ">
            {
                numOfCartItems === 0 ?
                    <div>
                        <div className="w-30 h-30 bg-gray-200/30 flex justify-center items-center m-auto rounded-full">
                            <FontAwesomeIcon icon={faBoxOpen} className="text-5xl text-gray-400" />
                        </div>
                        <h2 className="text-center text-2xl font-bold">Your cart is empty</h2>
                        <p className="text-center text-gray-400 font-semibold py-2">Add items to your cart to get started</p>
                        <Link href="/" className="flex justify-center">
                            <button className="bg-[#16873f] text-white font-bold px-3 py-2.5 rounded-md cursor-pointer w-fit m-auto hover:bg-[#16873f]/80 transition-all duration-300 mt-5 ">Continue Shopping</button>
                        </Link>
                    </div>
                    :
                    <>
                        <div className="flex items-center gap-3 pt-5">
                            <div className=" h-15 w-15 rounded-xl bg-[#16873f] flex items-center justify-center">
                                <FontAwesomeIcon icon={faCartPlus} className="text-white text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold">Shopping Cart</h2>
                        </div>
                        <div>
                            <p className="text-gray-400 font-semibold py-2">You have <span className="text-[#16873f]">{numOfCartItems} items</span>  in your cart</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] space-y-3 gap-5" >
                            <div>
                                <div className="border-b-2 border-gray-200 pb-5">
                                    {
                                        products.map((product: ICartItem) => (
                                            <CartItem key={product._id} products={product} />
                                        ))
                                    }

                                </div>
                                <div className="flex items-center justify-between py-5">
                                    <Link href="/">
                                        <p className="text-[#16873f] cursor-pointer font-semibold"><FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping</p>
                                    </Link>
                                    <div>
                                        <p className="text-red-500 cursor-pointer font-semibold"><FontAwesomeIcon icon={faTrashCan} />Clear all items</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <CartSummary numOfCartItems={numOfCartItems} totalCartPrice={totalCartPrice} />
                            </div>

                        </div>

                    </>
            }
       </div>
    </>
}