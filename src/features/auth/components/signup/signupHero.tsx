import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faStar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import qute from "../../../../assets/images/review-author.png"
export default function SignupHero() {
    return <>
          <div className="">
        <div className="">
          <h1 className="text-3xl font-semibold py-0.5">Welcome to <span className="text-green-600">FreshCart</span></h1>
          <p className="font-medium">Join thousands of happy customers who enjoy shopping with us in FreshCart </p>
        </div>
        <ul className="space-y-4">
          <li className="flex gap-3 items-center">
            <div className="bg-green-400/40 rounded-full w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faStar}
                className="text-green-500"
              />
            </div>
            <div className="">
              <h3 className="text-lg font-semibold">Premium Quality</h3>
              <p className="text-gray-500 font-medium">100% fresh and premium quality products</p>
            </div>
          </li>
          <li className="flex gap-3 items-center">
            <div className="bg-green-400/40 rounded-full w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faTruckFast}
                className="text-green-500"
              />
            </div>
            <div className="">
              <h3 className="text-lg font-semibold">Fast Delivery</h3>
              <p className="text-gray-500 font-medium">same-day delivery available in most of the cities</p>
            </div>
          </li>
          <li className="flex gap-3 items-center">
            <div className="bg-green-400/40 rounded-full w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faShieldHalved}
                className="text-green-500"
              />
            </div>
            <div className="">
              <h3 className="text-lg font-semibold">secure Shopping</h3>
              <p className="text-gray-500 font-medium">Your data and payment are completely secur</p>
            </div>
          </li>
        </ul>

        <div className="qute my-8 shadow-lg p-6 rounded-lg">
          <div>
            <div className="flex gap-2">
              <Image src={qute} alt="qute"
                className="w-12 h-12"
              />
              <div>
                <h3>Sara Johnson</h3>
                <p><FontAwesomeIcon icon={faStar} className="text-amber-400" />
                  <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                  <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                  <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                  <FontAwesomeIcon icon={faStar} className="text-amber-400" />
                </p>
              </div>
            </div>
            <blockquote className=" italic font-medium text-gray-500 pt-2">
              " FreshCart is the best online grocery shopping platform. I have been using it for a while now and it has never disappointed me. The food quality is always fresh and the delivery is fast. I would highly recommend it to everyone. "
            </blockquote>
          </div>
        </div>
      </div>
    </>;
}