"use client"
import { configureStore } from "@reduxjs/toolkit";
import { authReducer, AuthState } from "../features/auth/store/auth.slice";
import cartReducer, { CartState } from "../features/cart/store/cart.slice";
import wishlistReducer, { WishlistState } from "../features/wishList/store/wishlist.slice";
import { useDispatch, useSelector } from "react-redux";

export type PreloadedState = {
    auth: AuthState,
    cart: CartState,
    wishlist: WishlistState
}
export function createStore(preloadedState: PreloadedState) {
    const store = configureStore({
        reducer: {
            auth: authReducer,
            cart: cartReducer,
            wishlist: wishlistReducer
        },
        preloadedState
    })
    return store
}

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore['getState']>
type AppDispatch = AppStore['dispatch']
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
