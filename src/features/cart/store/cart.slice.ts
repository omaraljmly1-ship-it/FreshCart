import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItem, CartResponse } from "../types/cart.type";

export interface CartState {
    numOfCartItems: number,
    cartId: string | null,
    products: CartItem[],
    totalCartPrice: number,
    isLoading: boolean,
    error: string | null,
}

const initialState: CartState = {
    numOfCartItems: 0,
    cartId: null,
    products: [],
    totalCartPrice: 0,
    isLoading: false,
    error: null,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
       setCartInfo : function (state, action : PayloadAction<CartResponse>){
        state.numOfCartItems = action.payload.numOfCartItems
        state.cartId = action.payload.cartId
        state.products = action.payload.data.products
        state.totalCartPrice = action.payload.data.totalCartPrice
       },
       removeItem : function (state, action : PayloadAction<{id :string}>){
       const productId = action.payload.id
       const removedProduct = state.products.find((item : CartItem) => item.product.id === productId)
       if(removedProduct){
        state.products = state.products.filter((product : CartItem) => product.product.id !== productId)
        state.numOfCartItems = state.products.length
        state.totalCartPrice -= removedProduct.price * removedProduct.price*removedProduct.count
       }
       },
       clearCart : function (state){
           state.numOfCartItems = 0
           state.cartId = null
           state.products = []
           state.totalCartPrice = 0
       }
    }

})  
const cartReducer = cartSlice.reducer
export default cartReducer  
export const { setCartInfo,removeItem , clearCart} = cartSlice.actions