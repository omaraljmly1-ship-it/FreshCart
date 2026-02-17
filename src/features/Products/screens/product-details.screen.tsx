import { getSingleProduct } from "../server/product.action"
import ProductDetalis from "../components/ProductDetalis/ProductDetalis"


export default async function ProductDetailsScreen({ productId }: {productId: string}) {
    const response = await getSingleProduct({ id: productId })
    console.log(response)
    return <>
    <ProductDetalis product={response.data}/>

    </>
}