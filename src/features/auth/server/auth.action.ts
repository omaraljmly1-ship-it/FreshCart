'use server'

import axios, { AxiosRequestConfig } from "axios"
import { cookies } from "next/headers"


export async function setToken(token:string  , rememberMe:boolean):Promise<void> {
    const cookiesStore = await cookies()
    if(rememberMe){
        cookiesStore.set('token',token,{
            httpOnly:true,
            maxAge:30 * 24 * 60 * 60
        })
    }else{
        cookiesStore.set('token',token,{
            httpOnly:true,
            maxAge:1*24*60*60
        })
    }
   
}
export async function getToken():Promise<string | null> {
    const cookiesStore = await cookies()
    const token = cookiesStore.get('token')?.value || null ;
    return token
}
export async function clearToken():Promise<void> {
    const cookiesStore = await cookies()
    cookiesStore.delete('token')
}

export async function verifyToken(){
    const cookiesStore = await cookies()
    const token = cookiesStore.get('token')?.value || null ;
    if(!token){
     return{
        isAuthenticated:false,
        userInfo:null
     }
    }
    try {
        const options:AxiosRequestConfig = {
            url:'https://ecommerce.routemisr.com/api/v1/auth/verifyToken',
            method:'GET',
            headers:{
             token
            }
        }
        const {data} = await axios.request(options)
        if(data.message === 'verified'){
            const {name , role  , id} = data.decoded
            return{
                isAuthenticated:true,
                userInfo:{
                    name,
                    role,
                    id
                }
            }
        }
        return{
            isAuthenticated:false,
            userInfo:null
        }
        
    } catch (error) {
        return{
            isAuthenticated:false,
            userInfo:null
        }
    }
}