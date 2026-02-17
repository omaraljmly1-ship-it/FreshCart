"use server"

import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"
import { OrdersResponse } from "../types/order.type"

export async function getUserOrders({ id }: { id: string }): Promise<OrdersResponse> {
    const cookieStore = await cookies()


    const token = cookieStore.get("token")?.value || null
    try {
        const option: AxiosRequestConfig = {
            method: "GET",
            url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,

        }
        const { data } = await axios.request(option)
        return data
    }
    catch (error) {
        throw error
    }
}
