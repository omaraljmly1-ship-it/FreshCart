"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressCard, faArrowRightFromBracket,
    faBars, faChevronDown, faEnvelope, faHeart,
    faList, faPhone, faSearch, faShoppingCart, faUser,
    faUserPlus, faX
} from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/images/freshcart-logo.svg'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState, useAppSelector } from "../../store/store";
import useLogout from "@/src/features/auth/hooks/useLogout";

export default function Navbar() {
    const { logout } = useLogout()
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    function toggleMenu() {
        setOpen(!open);
    }
    const { numOfCartItems } = useAppSelector((state: AppState) => state.cart)
    const { isAuthenticated } = useSelector((appState: AppState) => appState.auth);
    return <>
        <header>
            <div className="container">

                {/* {top navbar} */}
                <div className="py-2 hidden lg:block">
                    <div className="flex py-2 justify-between">
                        <div className="flex justify-center items-center gap-4">
                            <a href="tel:123456789" className="flex gap-2">
                                <FontAwesomeIcon icon={faPhone}
                                    className=" w-3"
                                />
                                <span>123456789</span>
                            </a>


                            <a href="mailto:omar@gmail.com" className="flex gap-2 " >
                                <FontAwesomeIcon icon={faEnvelope}
                                    className=" w-3"
                                />
                                <span>omar@gmail.com</span>
                            </a>

                        </div>
                        <div className=" ">
                            <ul className="flex justify-center items-center gap-5 font-semibold text-sm">
                                <li><Link href="/orders">Track Order</Link></li>
                                <li><Link href="/About">About</Link></li>
                                <li><Link href="/contact">Contac</Link></li>
                                <li>
                                    <select name="" id="">
                                        <option value="EGP">EGP</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                    </select>

                                </li>
                                <li className="relative">
                                    <select name="" id="">
                                        <option value="ar">عربي</option>
                                        <option value="en">English</option>
                                    </select>
                                    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>


                {/* {main navbar} */}
                <div className="my-2 flex justify-between  items-center ">
                    <div>
                        <Image src={logo} alt="Site Logo" />
                    </div>
                    <div className="relative hidden lg:block">
                        <input type="text"
                            placeholder="Search for Products ..."
                            className=" btn"
                        />
                        <FontAwesomeIcon icon={faSearch}
                            className=" w-5 absolute right-2 top-1/2 -translate-y-1/2"
                        />
                    </div>
                    <div className=" justify-center items-center gap-5  hidden lg:flex">
                        <div className="hover:text-emerald-600">
                            <Link href="/wishlist" className={`${pathname === "/wishlist" ? "text-emerald-600 " : ""}flex flex-col justify-center items-center`}>
                                <FontAwesomeIcon icon={faHeart}
                                    className=" w-5 "
                                />
                                <span>Wishlist</span>
                            </Link>
                        </div>
                        <div className="hover:text-emerald-600">
                            <Link href="/cart" className={`${pathname === "/cart" ? "text-emerald-600 " : ""}flex flex-col justify-center items-center`}
                            >
                                <div className="relative">
                                    <FontAwesomeIcon icon={faShoppingCart}
                                        className=" w-5 "
                                    />
                                    <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-4 h-4 text-xs flex justify-center items-center">{numOfCartItems}</span>
                                </div>
                                <span>Cart</span>
                            </Link>
                        </div>
                        <div className="hover:text-emerald-600">
                            <Link href="/account" className={`${pathname === "/account" ? "text-emerald-600 " : ""}flex flex-col justify-center items-center`}>
                                <FontAwesomeIcon icon={faUser}
                                    className=" w-5 "
                                />
                                <span>Account</span>
                            </Link>
                        </div>


                        {
                            isAuthenticated ? (
                                <div className="hover:text-emerald-600 cursor-pointer">

                                    <div className={`${pathname === "/logout" ? "text-emerald-600 " : ""}flex flex-col justify-center items-center`}
                                        onClick={logout}
                                    >
                                        <FontAwesomeIcon icon={faArrowRightFromBracket}
                                            className=" w-5 "
                                        />
                                        <span>Logout</span>
                                    </div>
                                </div>
                            ) : <>

                                <div className="hover:text-emerald-600">
                                    <Link href="/signup" className={`${pathname === "/signup" ? "text-emerald-600 " : ""}flex flex-col justify-center items-center`}>
                                        <FontAwesomeIcon icon={faUserPlus}
                                            className=" w-5 "
                                        />
                                        <span>Signup</span>
                                    </Link>
                                </div>
                                <div className="hover:text-emerald-600">
                                    <Link href="/signin" className={`${pathname === "/signin" ? "text-emerald-600 " : ""}flex flex-col justify-center items-center`}>
                                        <FontAwesomeIcon icon={faAddressCard}
                                            className=" w-5 "
                                        />
                                        <span>Login</span>
                                    </Link>
                                </div>
                            </>}


                    </div>
                </div>

            </div>
        </header>

        {/* {bottom navbar} */}

        <nav className=" bg-gray-200/40 hidden lg:block">
            <div className="container flex gap-3 py-4 items-center">
                <div className="relative group">

                    <button className="border py-2 px-3 rounded-lg bg-green-600 text-white hover:bg-green-500 cursor-pointer"> <FontAwesomeIcon icon={faList} className="w-5" /> All Categories <FontAwesomeIcon icon={faChevronDown} className="w-5" /></button>

                    <ul className="hidden absolute group-hover:block bg-white rounded-lg p-4 *:py-1 *:border-b *:hover:bg-gray-100 *:border-b-gray-400/40 *:text-gray-600 *:font-semibold *:cursor-pointer ">
                        <li>Men's Fashone</li>
                        <li>Women's Fashone</li>
                        <li>Kids's Fashone</li>
                    </ul>
                </div>
                <ul className="*:px-2 *:hover:text-emerald-600">
                    <Link href="/">Home</Link>
                    <Link href="/recently-added">Recently Added</Link>
                    <Link href="/featured">Featured Products</Link>
                    <Link href="/Offers">Offers</Link>
                    <Link href="/Brands">Brands</Link>
                </ul>
            </div>
        </nav>

        {open ?
            <div className="absolute right-10 top-2 w-10 h-10 bg-green-600 rounded-lg flex lg:hidden justify-center items-center cursor-pointer text-white" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faX}
                    className=""
                />
            </div>
            :
            <div className="absolute right-10 top-2 w-10 h-10 bg-green-600 rounded-lg flex lg:hidden justify-center items-center cursor-pointer text-white" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars}
                    className=""
                />
            </div>
        }






        {/*! { Media Query} */}


        {open &&
            <>
                <div className="  layer bg-black/60 fixed inset-0 z-50 " onClick={toggleMenu}></div>
                <div className=" offcanvas animate-slide-in bg-white fixed top-0 bottom-0 min-w-70 z-60 p-3 *:border-b *:py-2 *:border-gray-200">
                    <div className="flex justify-between items-center ">
                        <Image src={logo} alt="Site Logo" />
                        <div className=" w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faX}
                                className="text-gray-400 cursor-pointer hover:text-gray-600 "
                            />
                        </div>

                    </div>
                    <div>
                        <div className="relative">
                            <input type="text"
                                placeholder="Search for Products ..."
                                className=" btn"
                            />
                            <FontAwesomeIcon icon={faSearch}
                                className=" w-5 absolute right-7 top-1/2 -translate-y-1/2"
                            />
                        </div>

                        <div className="py-2">
                            <h2 className="text-lg font-bold">Main Menu</h2>
                            <div className="flex flex-col gap-2 ">
                                <div className="hover:text-emerald-600 hover:bg-green-200 rounded-lg px-2 py-1">
                                    <Link href="/wishlist" className={`${pathname === "/wishlist" ? "text-emerald-600 bg-green-200 rounded-lg px-2 py-1 " : ""}flex items-center gap-2 `}>
                                        <FontAwesomeIcon icon={faHeart}
                                            className=" w-5 "
                                        />
                                        <span>Wishlist</span>
                                    </Link>
                                </div>
                                <div className="hover:text-emerald-600 hover:bg-green-200 rounded-lg px-2 py-1">
                                    <Link href="/cart" className={`${pathname === "/cart" ? "text-emerald-600 bg-green-200 rounded-lg px-2 py-1 " : ""}flex items-center gap-2`}
                                    >
                                        <FontAwesomeIcon icon={faShoppingCart}
                                            className=" w-5 "
                                        />
                                        <span>Cart</span>
                                    </Link>
                                </div>
                                <div className="hover:text-emerald-600 hover:bg-green-200 rounded-lg px-2 py-1">
                                    <Link href="/account" className={`${pathname === "/account" ? "text-emerald-600 bg-green-200 rounded-lg px-2 py-1 " : ""}flex items-center gap-2`}>
                                        <FontAwesomeIcon icon={faUser}
                                            className=" w-5 "
                                        />
                                        <span>Account</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Account</h2>

                        {
                            isAuthenticated ? (
                                <div className="hover:text-emerald-600 cursor-pointer">

                                    <div className={`${pathname === "/logout" ? "text-emerald-600 " : ""}flex flex-col justify-center items-center`}
                                        onClick={logout}
                                    >
                                        <FontAwesomeIcon icon={faArrowRightFromBracket}
                                            className=" w-5 "
                                        />
                                        <span>Logout</span>
                                    </div>
                                </div>
                            ) : <>
                                <div className="hover:text-emerald-600 hover:bg-green-200 rounded-lg px-2 py-1">
                                    <Link href="/signup" className={`${pathname === "/signup" ? "text-emerald-600 " : ""}flex items-center gap-2`}>
                                        <FontAwesomeIcon icon={faUserPlus}
                                            className=" w-5 "
                                        />
                                        <span>Sign up</span>
                                    </Link>
                                </div>
                                <div className="hover:text-emerald-600 hover:bg-green-200 rounded-lg px-2 py-1">
                                    <Link href="/signin" className={`${pathname === "/signin" ? "text-emerald-600 " : ""}flex items-center gap-2`}>
                                        <FontAwesomeIcon icon={faAddressCard}
                                            className=" w-5 "
                                        />
                                        <span>Login</span>
                                    </Link>
                                </div>
                            </>
                        }




                    </div>

                </div>
            </>
        }
    </>
}