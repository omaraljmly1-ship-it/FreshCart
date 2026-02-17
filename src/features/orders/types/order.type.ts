import { User } from "../../auth/types/user.types";
import { CartItem } from "../../cart/types/cart.type";

export interface ShippingAddress {
    details: string;
    phone: string;
    city: string;
}

export interface Order {
    shippingAddress: ShippingAddress;
    taxPrice: number;
    shippingPrice: number;
    totalOrderPrice: number;
    paymentMethodType: string;
    isPaid: boolean;
    isDelivered: boolean;
    _id: string;
    user: User;
    cartItems: CartItem[];
    paidAt?: string;
    createdAt: string;
    updatedAt: string;
    id: number;
    __v: number;
}

export type OrdersResponse = Order[];