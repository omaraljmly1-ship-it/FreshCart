"use client";
import { faAngleDown, faAngleUp, faBox, faCalendar, faClock, faCreditCard, faHashtag, faLocationPin, faMoneyBill, faPhone, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserOrders } from "../server/order.action";
import { Order } from "../types/order.type";
import { useAppSelector } from "@/src/store/store";

export function OrderScreen() {
    const { userInfo } = useAppSelector((state) => state.auth)
    const [showDetails, setShowDetails] = useState(false);
    const [orders, setOrders] = useState<Order[]>([]);
    if (!userInfo) {
        return
    }
    useEffect(() => {
        const fetchOrders = async () => {
            const response = await getUserOrders({ id: userInfo.id });
            setOrders(response);
        };
        fetchOrders();
    }, []);
    return <>

        <div className="container py-5">
            <div className="flex items-center gap-5">
                <div className=" w-12 h-12 rounded-lg bg-[#1aae51] flex items-center justify-center">
                    <FontAwesomeIcon icon={faBox} className="text-xl text-white" />
                </div>
                <div className="">
                    <h1 className="font-bold text-3xl">My Orders</h1>
                    <p className="text-gray-500 font-semibold">Track your orders and manage your {orders.length} {orders.length === 1 ? "order" : "orders"}</p>
                </div>
            </div>

            {
                orders.map((order: Order) => {
                    return <div key={order.id}
                        className=" border border-green-300  rounded-lg my-3 shadow">
                        <div className="flex justify-between items-center border border-gray-300 p-2 rounded-lg shadow">
                            <div className="flex gap-5 py-2">
                                <div>
                                    <Image src={order.cartItems[0].product.imageCover} width={100} height={100} alt="" />
                                </div>
                                <div>
                                    {
                                        order.isDelivered ? (
                                            <div className="py-1  my-2 bg-[#c6dcfe] rounded-lg  text-blue-500 w-fit">
                                                <p className="px-3 font-semibold text-sm"> <FontAwesomeIcon icon={faTruck} /> Delivered</p>
                                            </div>
                                        ) : (
                                            <div className="py-1  my-2 bg-[#fef3c6] rounded-lg  text-amber-500 w-fit">
                                                <p className="px-3 font-semibold text-sm"> <FontAwesomeIcon icon={faClock} /> Processing</p>
                                            </div>
                                        )
                                    }
                                    <div>
                                        <p><FontAwesomeIcon icon={faHashtag} className=" text-lg font-semibold text-gray-300" /> <span className="font-semibold text-2xl text-gray-700">{order.id}</span></p>
                                    </div>
                                    <ul className="flex items-center gap-5 *:font-semibold *:text-gray-500 py-3">
                                        <li>
                                            <FontAwesomeIcon icon={faCalendar} /> {new Date(order.createdAt).toDateString()}
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faBox} />{order.cartItems.length}
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faLocationPin} /> {order.shippingAddress.city}
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <p className="text-sm"><span className="font-bold text-2xl text-[#1aae51]">{order.totalOrderPrice}</span>EGP</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 relative">

                                <div className="absolute -top-18 right-1 w-10 h-10 rounded-lg bg-gray-300 flex items-center justify-center">
                                    {
                                        order.paymentMethodType === "cash" ? (
                                            <FontAwesomeIcon icon={faMoneyBill} className="text-lg font-semibold text-blue-500 " />
                                        ) : (
                                            <FontAwesomeIcon icon={faCreditCard} className="text-lg font-semibold text-blue-500 " />
                                        )
                                    }
                                </div>
                                <div className="">
                                    <button
                                        onClick={() => setShowDetails(!showDetails)}
                                        className={`cursor-pointer text-gray-500 py-2 px-3 rounded-lg border border-gray-300 bg-gray-100 transition-all duration-300 ${showDetails ? "bg-green-600 text-white" : ""}`}>
                                        {
                                            showDetails ? <>
                                                <span className="font-semibold">Hide</span>
                                                <FontAwesomeIcon icon={faAngleUp} />
                                            </> : <>
                                                <span className="font-semibold">Detalis</span>
                                                <FontAwesomeIcon icon={faAngleDown} />
                                            </>
                                        }


                                    </button>
                                </div>

                            </div>
                        </div>
                        {/* Detalis */}
                        <div className={`mx-5 py-5 bg-[#fbfcfd] px-2 rounded-xl ${showDetails ? "block" : "hidden"} `}>
                            <div className="flex items-center gap-2 my-3">
                                <div className="w-10 h-10 rounded-xl bg-green-300/20 text-[#15ae51] flex items-center justify-center">
                                    <FontAwesomeIcon icon={faBox} />
                                </div>
                                <p className="text-gray-500 font-semibold">Order Items</p>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded-lg my-5 shadow">
                                <div className="flex items-center gap-5">
                                    <Image src={order.cartItems[0].product.imageCover} width={100} height={100} alt="" />
                                    <div>
                                        <p className="font-semibold text-xl">{order.cartItems[0].product.title}</p>
                                        <p className="text-sm text-gray-400"><span>{order.cartItems[0].count}</span>x <span> {order.cartItems[0].product.priceAfterDiscount || order.cartItems[0].product.price}</span>EGP</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-[#1aae51] text-2xl">{order.totalOrderPrice}</p>
                                    <p className="font-semibold text-gray-500 text-sm">EGP</p>

                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="bg-white rounded-xl py-2 px-5">
                                    <div className="flex items-center gap-2">
                                        <div className=" w-8 h-8 rounded-lg bg-blue-300/20 flex items-center justify-center">
                                            <FontAwesomeIcon icon={faLocationPin} className="text-blue-500 text-sm" />
                                        </div>
                                        <p>Delivery Address</p>
                                    </div>

                                    <ul className=" space-y-3 my-2">
                                        <li className="font-semibold">City : {order.shippingAddress.city}</li>
                                        <li className="font-semibold text-gray-500 ">Area : {order.shippingAddress.details}</li>
                                        <li className="font-semibold text-gray-500 "><FontAwesomeIcon icon={faPhone} /> {order.shippingAddress.phone}</li>
                                    </ul>
                                </div>

                                <div className="bg-amber-300/20 rounded-xl px-8 py-2">
                                    <div className="flex items-center gap-3">
                                        <div className=" w-8 h-8 rounded-lg bg-amber-500  flex items-center justify-center">
                                            <FontAwesomeIcon icon={faClock} className="text-lg font-semibold text-white" />
                                        </div>
                                        <p>Order Summary</p>
                                    </div>
                                    <div className="space-y-3 my-2">
                                        <div className=" *:font-semibold text-gray-500 flex justify-between items-center">
                                            <p>Subtotal</p>
                                            <p>{order.totalOrderPrice}</p>
                                        </div>
                                        <div className=" *:font-semibold text-gray-500 flex justify-between items-center">
                                            <p>Shipping</p>
                                            <p>{order.shippingPrice > 450 ? "Free" : order.shippingPrice}</p>
                                        </div>
                                        <div className=" flex justify-between items-center">
                                            <p className="font-semibold">Total</p>
                                            <p className="text-2xl font-bold text-[#1aae51]">{order.totalOrderPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }


        </div>
    </>
}