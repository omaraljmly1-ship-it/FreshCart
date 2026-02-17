import Link from "next/link"
import getAllCategories from "../../categories/server/categories.action"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import { Category } from "../../categories/types/Category.types"

export default async function OurCategories() {
    const response = await getAllCategories()
    return <>
        <div className="container py-8">
            <div>
                <div className="flex  items-center justify-between border-l-8 rounded-lg border-green-600 ps-3">
                    <h2 className="text-4xl font-bold">Shop By <span className="text-green-600">Category</span></h2>
                    <Link href={''} className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors duration-75">View All Categories <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>

<div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5 mt-2">
    {response.data.map((category: Category) => (
        <div key={category._id} className="flex gap-4 flex-col justify-center items-center py-2 shadow rounded-lg px-10 hover:shadow-lg duration-100 transition-all">
            <div className="h-20 w-20 relative overflow-hidden rounded-full"> 
                <Image 
                    src={category.image} 
                    alt={category.name} 
                    fill 
                    sizes="80px" 
                    className="object-cover" 
                />
            </div>
            <p className="text-lg font-semibold">{category.name}</p>
        </div>
    ))}
</div>
            </div>
        </div>
    </>
}