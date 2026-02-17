import getProduct from "../../Products/server/product.action"
import ProducCard from "../../Products/components/ProductCard"
import { Product } from "../../Products/types/product.types"
export default async function FeaturedProducts() {
    const response = await getProduct()
    return <>
        <div className="container">
            <div className="my-5 space-y-5">
                <div>
                    <h2 className="text-3xl font-bold border-s-8 border-green-700 rounded-lg ps-2">Featured <span className="text-green-600">Products</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {response.data.map((product: Product) => (
                        <ProducCard key={product._id} info={product} />
                    ))}
                </div>
            </div>
        </div>
    </>
}