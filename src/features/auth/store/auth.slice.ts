import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type User = {
    id?:string,
    name:string,
    email?:string,
    role:string,
};

export type AuthState = {
    userInfo:User | null,
    isAuthenticated:boolean
}

const initialState:AuthState = {
    userInfo:null,
    isAuthenticated:false,
}
const authSlice = createSlice({

    name:"auth",
    initialState,
    reducers:{
        setAuthInfo :function(state,action:PayloadAction<AuthState>){
            state.isAuthenticated = action.payload.isAuthenticated
            state.userInfo = action.payload.userInfo
        },
        // setToken:(state,action)=>{
        //     state.token = action.payload
        //     state.isAuthenticated = true
        // },
        // clearToken:(state)=>{
        //     state.token = null
        //     state.isAuthenticated = false
        // },
        // setUser:(state,action)=>{
        //     state.userInfo = action.payload
        // },
        // clearUser:(state)=>{
        //     state.userInfo = null
        // },
        // setIsLoading:(state,action)=>{
        //     state.isLoading = action.payload
        // },
        // setError:(state,action)=>{
        //     state.error = action.payload
        // }
    }
})      

export const authReducer = authSlice.reducer
export const {setAuthInfo} = authSlice.actions
// export default authSlice.reducer    