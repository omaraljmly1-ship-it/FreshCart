"use client";
import { faArrowLeft, faBagShopping, faBox, faCheck, faCreditCard, faExclamation, faHome, faMoneyBill, faShield, faSpinner, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from '../../../assets/images/2e5810ff3e-e750761ebcd4ae5907db.png'
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { paymentSchema, PaymentType } from "../schema/payment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useAppSelector } from "@/src/store/store";
import { toast } from "react-toastify";
import { createCashOrder, createOnlineOrder } from "../server/payment.action";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "../../cart/store/cart.slice";
import { CartItem } from "../../cart/types/cart.type";


export default function Payment() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { cartId, numOfCartItems, products, totalCartPrice } = useAppSelector((state) => state.cart)
    const [paymentMethod, setPaymentMethod] = useState<"cash" | "card">("cash");
    const inatalValues = {
        city: "",
        details: "",
        phone: "",
    }


    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        defaultValues: inatalValues,
        resolver: zodResolver(paymentSchema),
        mode: "onSubmit",
        reValidateMode: "onChange",

    });


    const onSubmit: SubmitHandler<PaymentType> = async (values) => {
        try {
            if (!cartId) {
                toast.error("Cart is empty")
                return
            }

            if (paymentMethod === "cash") {
                const response = await createCashOrder({ cartId, shippingAddress: values })
                console.log(response);
                if (response.status === "success") {
                    dispatch(clearCart())
                    reset()
                    setTimeout(() => {
                        router.push("/orders")
                    }, 3000)
                    toast.success(response.message)
                }
            }
            else {
                const response = await createOnlineOrder({ cartId, shippingAddress: values, url: location.origin })
                console.log(response);
                if (response.status === "success") {
                    dispatch(clearCart())
                    toast.loading("Redirecting to payment page...")
                    setTimeout(() => {
                        window.location.href = response.session.url
                    }, 2000)
                    toast.success(response.message)
                }
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
    return <>
        <div className="container py-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="flex items-center gap-2">
                        <div className="text-2xl w-15 h-15 rounded-lg bg-[#159444] flex items-center justify-center text-white">
                            <FontAwesomeIcon icon={faTicket} className="text-3xl text-white" />
                        </div>
                        <h1 className="text-3xl font-bold"> Complete Your Order</h1>
                    </div>
                    <div className="flex items-center justify-between py-5">
                        <p className="text-gray-500 font-semibold text-lg ">Review your items and complete your purchase</p>
                        <Link href="/cart" className="flex items-center gap-2">
                            <p className="text-[#159444] font-semibold"><FontAwesomeIcon icon={faArrowLeft} /> Back to Cart </p>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
                    <div>
                        <div className=" shadow p-2 rounded-lg">
                            <div className="bg-[#159444] p-5 rounded-lg ">
                                <div className="flex items-center gap-3 text-white">
                                    <FontAwesomeIcon icon={faHome} className="text-3xl " />
                                    <h2 className="text-2xl font-bold">Shipping Address</h2>
                                </div>
                                <p className="text-gray-300 font-semibold text-lg ">Where should we deliver your order?</p>
                            </div>
                            <div className=" mt-3 bg-[#eff6ff] p-3 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-[#c3d6f0] flex items-center justify-center text-white">
                                        <FontAwesomeIcon icon={faExclamation} className=" p-1 rounded-full text-xs bg-[#155dfc]" />
                                    </div>
                                    <div>
                                        <h2 className="text-[#155dfc]">Delivery Information</h2>
                                        <p className="text-[#3a76f7] text-sm">Please ensure your address is accurate for smooth delivery</p>
                                    </div>
                                </div>

                            </div>
                            <div className="space-y-5 px-2 py-5" >
                                <div className=" relative">
                                    <label htmlFor="city" className="font-semibold mb-2">City <span className="text-red-500">*</span></label>
                                    <input
                                        {...register("city")}
                                        type="text" className="w-full border-2 border-gray-300 placeholder:text-gray-400 placeholder:font-semibold placeholder:inline-block ps-10 rounded-lg py-2 focus:outline-none focus:border-[#159444] focus:border-2 focus:ring-1 focus:ring-[#159444] transition-all duration-300 ease-in-out" placeholder="e.g. Cairo , Alexandria , Giza" />
                                    {errors.city && <span className="text-red-500">{errors.city.message}</span>}
                                </div>
                                <div className=" relative">
                                    <label
                                        htmlFor="details" className="font-semibold mb-2">Street Address <span className="text-red-500">*</span></label>
                                    <input
                                        {...register("details")}
                                        id="details"
                                        type="text" className="w-full border-2 border-gray-300 placeholder:text-gray-400 placeholder:font-semibold ps-10 rounded-lg py-10 focus:outline-none focus:border-[#159444] focus:border-2 focus:ring-1 focus:ring-[#159444] transition-all duration-300 ease-in-out" placeholder="Street name , Building number , Floor number" />
                                    {errors.details && <span className="text-red-500">{errors.details.message}</span>}
                                </div>
                                <div className=" relative">
                                    <label
                                        htmlFor="city" className="font-semibold mb-2">Phone Number <span className="text-red-500">*</span></label>
                                    <input
                                        {...register("phone")}
                                        type="text" className="w-full border-2 border-gray-300 placeholder:text-gray-400 placeholder:font-semibold ps-10 rounded-lg py-2 focus:outline-none focus:border-[#159444] focus:border-2 focus:ring-1 focus:ring-[#159444] transition-all duration-300 ease-in-out" placeholder="01000000000" />
                                    {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                                </div>


                                <div className="mt-5 shadow rounded-lg">
                                    <div className="bg-[#159444] p-5 rounded-lg ">
                                        <div className="flex items-center gap-3 text-white">
                                            <FontAwesomeIcon icon={faCreditCard} className="text-3xl " />
                                            <h2 className="text-2xl font-bold">Payment Method</h2>
                                        </div>
                                        <p className="text-gray-300 font-semibold text-lg ">1 item</p>
                                    </div>

                                    <div className="space-y-2 mt-2">
                                        <button type="button"
                                            onClick={() => {
                                                setPaymentMethod("cash");
                                            }}
                                            className={`cursor-pointer w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group border-[#159444] bg-linear-to-r from-primary-50 to-emerald-50 shadow-sm ${paymentMethod === "cash" ? "border-[#159444] bg-linear-to-r from-[#e8f4ef] to-[#d1e9d9] " : ""}`}>
                                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-linear-to-br from-[#12a949] to-[#159444] text-white shadow-lg shadow-primary-500/30 ${paymentMethod === "cash" ? "bg-linear-to-br from-[#12a949] to-blue-600 text-white " : ""}`}>
                                                <FontAwesomeIcon icon={faMoneyBill} className="text-3xl " />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h3 className="font-bold text-primary-700">Cash on Delivery</h3>
                                                <p className="text-lg text-gray-500 mt-0.5">Pay when your order arrives at your doorstep</p></div>
                                            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all bg-primary-600 text-white ${paymentMethod === "cash" ? "bg-linear-to-br from-[#12a949] to-blue-600 text-white " : ""}`}>
                                                <FontAwesomeIcon icon={faCheck} className="  " />
                                            </div>
                                        </button>


                                        <button
                                            onClick={() => { setPaymentMethod("card"); }}
                                            type="button"
                                            className={`cursor-pointer w-full p-5 rounded-xl border-2  transition-all flex items-center gap-4 group border-gray-500 shadow-sm ${paymentMethod === "card" ? "border-[#159444] bg-linear-to-r from-[#e8f4ef] to-[#d1e9d9] " : ""}`}>
                                            <div className={`w-14 h-14 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center transition-all shadow-lg shadow-primary-500/30 ${paymentMethod === "card" ? "bg-linear-to-br from-[#12a949] to-blue-600 text-white " : ""}`}>
                                                <FontAwesomeIcon icon={faCreditCard} className="text-3xl " />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h3 className="font-bold text-primary-700">Credit Card</h3>
                                                <p className="text-lg text-gray-500 mt-0.5">Pay with your credit card</p></div>
                                            <div className={`w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center transition-all text-white ${paymentMethod === "card" ? "bg-green-600" : ""}`}>
                                                <FontAwesomeIcon icon={faCheck} className=" " />
                                            </div>
                                        </button>

                                    </div>

                                    <div className="flex items-center gap-3 py-5 px-5 mt-2 bg-green-200/20 rounded-xl">
                                        <div className="h-10 w-10 rounded-full flex items-center justify-center bg-[#d0f3dd]">
                                            <FontAwesomeIcon icon={faShield} className="text-[#159444] text-lg" />
                                        </div>
                                        <div className="">
                                            <h2 className="font-bold text-[#0a7932]">Secure & Encrypted Payment</h2>
                                            <p className="text-[#159444]"> Your payment info is protected with 256-bit SSL encryption</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* detalis */}
                    <div className="my-5 lg:my-0  shadow rounded-lg space-y-2">
                        <div className="bg-[#159444] p-5 rounded-lg ">
                            <div className="flex items-center gap-3 text-white">
                                <FontAwesomeIcon icon={faBagShopping} className="text-3xl " />
                                <h2 className="text-2xl font-bold">Order Summary</h2>
                            </div>
                            <p className="text-gray-300 font-semibold text-lg ">{numOfCartItems} item</p>
                        </div>
                        {
                            products.map((product: CartItem) => {
                                return (

                                    <div className="p-3 mb-3 border-b-2 border-gray-200">
                                        <div className="bg-gray-200/30 py-2 px-3 rounded-xl space-y-2 my-3">
                                            <div className=" flex justify-between items-center">
                                                <div className="flex justify-baseline items-center gap-3">
                                                    <div>
                                                        <Image src={product.product.imageCover} alt="" width={50} height={50} />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-lg font-semibold">{product.product.title}</h2>
                                                        <p className="text-gray-400"><span>{product.count}</span> x <span>{product.price} EGP</span></p>
                                                    </div>
                                                </div>
                                                <p className="font-bold">{product.price * product.count}</p>
                                            </div>
                                        </div>
                                    </div>

                                )

                            })}
                        <div>
                            <div className="space-y-4 py-5 px-2">
                                <div className="flex justify-between items-center font-semibold text-lg text-gray-500">
                                    <p>Subtotal</p>
                                    <p>{totalCartPrice} EGP</p>
                                </div>
                                <div className="flex justify-between items-center font-semibold text-lg text-gray-500 border-b border-gray-200 pb-2">
                                    <p>Shipping</p>
                                    {
                                        totalCartPrice >= 450 ? <p>Free</p> : <p>50 EGP</p>
                                    }
                                </div>
                                <div className="flex justify-between items-center ">
                                    <p className="text-2xl font-bold">Total :</p>
                                    <p className="text-xl font-semibold text-gray-500"><span className="text-2xl font-bold text-[#159444]">{totalCartPrice}</span> EGP</p>
                                </div>
                            </div>
                        </div>
                        {
                            isSubmitting ? <div className="mx-3 my-5 ">
                                <button className="cursor-not-allowed flex justify-center items-center gap-2 w-full py-3 text-center text-xl  font-bold rounded-xl bg-linear-to-br from-[#0f6e32] to-[#0a4821] text-white" type="submit">
                                    <p> <FontAwesomeIcon icon={faSpinner} spin /> Place Order</p>
                                </button>
                            </div> : <div className="mx-3 my-5 ">
                                <button className="cursor-pointer flex justify-center items-center gap-2 w-full py-3 text-center text-xl  font-bold rounded-xl bg-linear-to-br from-[#12a949] to-[#159444] text-white" type="submit">
                                    <p> <FontAwesomeIcon icon={faBox} /> Place Order</p>
                                </button>
                            </div>
                        }

                    </div>
                </div>

            </form>

        </div >
    </>
}

