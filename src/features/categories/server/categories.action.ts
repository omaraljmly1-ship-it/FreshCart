'use server'

import axios, { AxiosRequestConfig } from "axios"
import { CategoryResponse } from "../types/Category.types"

export default async function getAllCategories(): Promise<CategoryResponse> {
    try {
        const options: AxiosRequestConfig = {
            url: 'https://ecommerce.routemisr.com/api/v1/categories',
            method: 'GET'
        }
        const { data } = await axios.request(options)
        return data
    } catch (error) {
        throw error
    }
}