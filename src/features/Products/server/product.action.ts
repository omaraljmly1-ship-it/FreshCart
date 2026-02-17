'use server'

import axios, { AxiosRequestConfig } from "axios"
import { ProductResponse, SingleProductResponse } from "../types/product.types"

export default async function getProduct():Promise<ProductResponse> {

    try {
        const options: AxiosRequestConfig = {
            url: 'https://ecommerce.routemisr.com/api/v1/products',
            method: 'GET'
        }

        const { data } = await axios.request(options)

        return data

    } catch(error) {
        throw error
    }
}

export async function getSingleProduct({id}: {id: string}):Promise<SingleProductResponse>{
    try {
        const options: AxiosRequestConfig = {
            url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
            method: 'GET'
        }

        const { data } = await axios.request(options)

        return data
    } catch(error) {
        throw error
    }
}