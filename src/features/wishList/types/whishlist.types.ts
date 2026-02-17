import { Product } from "../../Products/types/product.types";

export interface WishlistResponse {
    status?: string;
    count: number;
    data: Product[];
}