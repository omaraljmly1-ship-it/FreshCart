"use server"

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { PaymentType } from "../schema/payment.schema";

export async function createCashOrder({cartId ,shippingAddress }: {cartId: string , shippingAddress: PaymentType}) {
    const  cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    try {
      const options:AxiosRequestConfig = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,  
        method: "POST",
        data: { 
            shippingAddress
        },
        headers: {
            token
        }
      }
        const {data} = await axios.request(options)
        return data;

    } catch (error) {
      throw error;
    }
}
export async function createOnlineOrder({cartId ,shippingAddress ,   url }: {cartId: string , shippingAddress: PaymentType , url: string}) {
    const  cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    try {
      const options:AxiosRequestConfig = {
        url: `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,  
        method: "POST",
        data: { 
            cartId ,
            shippingAddress
        },
        headers: {
            token
        }
      }
        const {data} = await axios.request(options)
        return data;

    } catch (error) {
      throw error;
    }
}