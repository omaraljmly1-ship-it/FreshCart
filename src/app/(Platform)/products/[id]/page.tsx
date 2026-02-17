import ProductDetailsScreen from "@/src/features/Products/screens/product-details.screen";
type ProductsDitalisPageParams = {
    params: Promise<{id: string}>
}
export default async function ProductsDitalisPage({params}: ProductsDitalisPageParams) {
  const {id} = await params
  return <>
  <ProductDetailsScreen productId={id}/>
  </>
}
