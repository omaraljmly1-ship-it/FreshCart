import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WishlistResponse } from "../types/whishlist.types";
import { Product } from "../../Products/types/product.types";

export interface WishlistState {
    products: Product[]
    numOfWishlistItems: number
}

const initialState: WishlistState = {
    products: [],
    numOfWishlistItems: 0,

}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        setWishlistInfo: function (state, action: PayloadAction<WishlistResponse>) {
            state.products = action.payload.data
                   state.numOfWishlistItems = action.payload.count
        }
    }
})
const wishlistReducer = wishlistSlice.reducer
export default wishlistReducer
export const { setWishlistInfo } = wishlistSlice.actions    