'use server'
import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { CartResponse } from "../../cart/types/cart.type";
import { WishlistResponse } from "../types/whishlist.types";

export async function addProductToWishlist({ productId }: { productId: string }) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value || null;
    try {
        const options: AxiosRequestConfig = {
            url: 'https://ecommerce.routemisr.com/api/v1/wishlist',
            method: 'POST',
            headers: {
                token: token
            },
            data: {
                productId
            }
        }
        const { data } = await axios.request(options);
        console.log(data)
        return data;

    } catch (error) {
        throw error;
    }
}

export async function getLoggedUserWishlist(): Promise<WishlistResponse> {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value || null;
    try {
        const options: AxiosRequestConfig = {
            url: 'https://ecommerce.routemisr.com/api/v1/wishlist',
            method: 'GET',
            headers: {
                token: token
            }
        }
        const { data } = await axios.request(options);
        console.log(data)
        return data;

    } catch (error) {
        throw error;
    }
}

export async function removeProductFromWishlist(productId: string): Promise<CartResponse> {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value || null;
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
            method: 'DELETE',
            headers: {
                token: token
            }
        }
        const { data } = await axios.request(options);
        console.log(data)
        return data;

    } catch (error) {
        throw error;
    }
}
