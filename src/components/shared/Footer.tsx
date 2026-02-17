import Link from 'next/link';
import logo from '../../assets/images/freshcart-logo.svg'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import visa from '../../assets/images/mini-logo.png'
export default function Footer() {
    return <>
        <div className="container lg:mt-5">
            <div className=" grid lg:grid-cols-2 xl:grid-cols-5 py-2">

                <div className='xl:col-span-2  p-2'>
                    <Image src={logo} alt="Logo image" className='pb-2'/>
                    <p className='font-medium  text-gray-500 '>FrechCart is a versatile e-commerce platform offering a wida range of protects , from ciothing to electrnics .it provides a user-frendly experience for seamless shopping across diverse categories.</p>
                    <ul className='flex gap-2  text-gray-500 py-2 *:cursor-pointer'>
                        <li className='hover:text-gray-700 *:duration-100'><FontAwesomeIcon icon={faFacebookF} /></li>
                        <li className='hover:text-gray-700 *:duration-100'><FontAwesomeIcon icon={faTwitter} /></li>
                        <li className='hover:text-gray-700 *:duration-100'><FontAwesomeIcon icon={faInstagram} /></li>
                        <li className='hover:text-gray-700 *:duration-100'><FontAwesomeIcon icon={faYoutube} /></li>
                    </ul>
                </div>

                <div className='sm:mt-1 grid-cols-1'>
                    <h2 className=' font-bold'>Categories</h2>
                    <ul className='*:py-1 font-medium  text-gray-500 *:hover:text-gray-700 *:duration-100'>
                        <li>
                            <Link href={''}>
                                Men's Fashion
                            </Link></li>
                        <li>
                            <Link href={''}>
                                Women's Fashion
                            </Link></li>
                        <li>
                            <Link href={''}>
                                Boby & Toyes
                            </Link></li>
                        <li>
                            <Link href={''}>
                                Beauty & Health
                            </Link></li>
                        <li>
                            <Link href={''}>
                                Electronics
                            </Link></li>

                    </ul>
                </div>
                <div className='sm:mt-1'>
                    <h2 className=' font-bold'>Quick Links</h2>
                    <ul className='*:py-1 font-medium  text-gray-500  *:hover:text-gray-700 *:duration-100'>
                        <li>
                            <Link href={'/About'}>
                                About US
                            </Link></li>
                        <li>
                            <Link href={'/contact'}>
                                Contact Us
                            </Link></li>
                        <li>
                            <Link href={'/privacy-policy'}>
                               Privacy Policy
                            </Link></li>
                        <li>
                            <Link href={'/terms'}>
                                Terms of Service
                            </Link></li>
                        <li>
                            <Link href={''}>
                                Shipping Policy
                            </Link></li>

                    </ul>
                </div>
                <div className='sm:mt-1'>
                    <h2 className=' font-bold '>Categories</h2>
                    <ul className='*:py-1 font-medium  text-gray-500  *:hover:text-gray-700 *:duration-100'>
                        <li>
                            <Link href={''}>
                                My Account 
                            </Link></li>
                        <li>
                            <Link href={'/orders'}>
                                My Orders
                            </Link></li>
                        <li>
                            <Link href={'/Wishlist'}>
                                Wishlist
                            </Link></li>
                        <li>
                            <Link href={''}>
                                Returns & Refunds
                            </Link></li>
                        <li>
                            <Link href={''}>
                                Help Center
                            </Link></li>

                    </ul>
                </div>
            </div>
            <div className='flex justify-between items-center pt-2 border-t border-gray-200'>
                <p>Copyright © {new Date().getFullYear()} FreshCart. All rights reserved.</p>
                <Image src={visa} alt="Visa" className='w-7'/>
            </div>
        </div>
    </>
}