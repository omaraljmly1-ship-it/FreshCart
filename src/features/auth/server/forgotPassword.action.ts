import axios, { AxiosRequestConfig } from "axios";

export async function forgotPasswordAction(email: string) {
    try {
      const options:AxiosRequestConfig = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
        method: "POST",
        data: { 
            email 
        },
      }
        const {data} = await axios.request(options)
        return data;

    } catch (error) {
      throw error;
    }
}

export async function verifyResetCodeAction(resetCode: string) {
    console.log(resetCode);
    try {
      const options:AxiosRequestConfig = {
        url: 'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
        method: "POST",
        data: { 
            resetCode 
        },
      }
        const {data} = await axios.request(options)
        console.log(data);
        return data;

    } catch (error) {
      throw error;
    }
}