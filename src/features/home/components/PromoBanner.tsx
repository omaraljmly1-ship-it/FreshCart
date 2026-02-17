import { faArrowRotateRight, faHeadset, faShieldHalved, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PromoBanner() {
    const feature = [
        {
            icon: faTruck,
            title: "Free Shipping",
            description: "On orders over 500 EGP",
            color: "bg-blue-100/80",
            iconColor: "text-blue-600"
        },
        {
            icon: faShieldHalved,
            title: "Secure Payment",
            description: "100% secure transactions",
            color: "bg-green-100/90",
            iconColor: "text-green-600"
        },
        {
            icon: faArrowRotateRight,
            title: "Easy Returns",
            description: "14-day return polic",
            color: "bg-amber-100/90",
            iconColor: "text-amber-600"
        },
        {
            icon: faHeadset,
            title: "24/7 Support",
            description: "Dedicated support team",
            color: "bg-indigo-200/80",
            iconColor: "text-indigo-600"
        }
    ]

    return <>
        <div className="bg-gray-200/40 py-5">
            <div className="container my-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {
                    feature.map((feature, index) => (
                        <div key={index} className=" flex gap-2 p-3 shadow-lg rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${feature.color}`}>
                                <FontAwesomeIcon icon={feature.icon} className={`text-lg ${feature.iconColor}`} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}