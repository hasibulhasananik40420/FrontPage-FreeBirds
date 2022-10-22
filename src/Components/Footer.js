import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='py-6 bg-[#1E2B47] '>

            <div className='text-white md:flex md:justify-evenly w-full pl-8'>


                <div>
                    <h1 className='text-2xl font-medium pb-3 font-poppins'>FontPage FreeBirds</h1>
                    <div className='flex items-center gap-3 pb-2 text-xl'>
                        <CiLocationOn></CiLocationOn>
                        <p className='font-medium font-poppins'> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    </div>
                    <div className='flex items-center gap-3 pb-2'>
                        <HiOutlineMail></HiOutlineMail>
                        <p className='cursor-pointer font-medium font-poppins'> <span>Official:</span> <span className='hover:underline duration-300 font-poppins'> FontPage FreeBirds.com</span></p>
                    </div>
                    <div className='flex items-center gap-3 pb-2'>
                        <BsTelephone></BsTelephone>
                        <p className='font-medium cursor-pointer font-poppins'> <span> Helpline :</span> <span className='hover:underline font-poppins'>01790170749</span></p>
                    </div>

                    <div className='pb-2 font-medium font-poppins'>

                        <p > (Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                    </div>
                    

                </div>

                <div className='mt-4 md:mt-0 cursor-pointer'>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl font-poppins'>Blogs</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl font-poppins '>success</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl font-poppins '>About us</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl font-poppins'>Refund policy</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl font-poppins'>Terms and Conditions</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl font-poppins'>Privacy & App Privacy Policy</p>
                    </div>



                    <div className='flex gap-5 pt-4 pb-2 cursor-pointer'>
                        <FaFacebookF className='bg-white text-black w-6 h-6 p-1 rounded-sm'></FaFacebookF>
                        <FiInstagram className='bg-white text-black w-6 h-6 p-1  rounded-sm'></FiInstagram>
                        <FiLinkedin className='bg-white text-black w-6 h-6 p-1 rounded-sm'></FiLinkedin>
                        <AiOutlineYoutube className='bg-white text-black w-6 h-6 p-1 rounded-sm'></AiOutlineYoutube>

                    </div>



                </div>

                <div className='mt-6 md:mt-0 cursor-pointer'>
                    <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
                </div>
            </div>


            <div className='text-sm font-medium text-center text-white mt-10 font-poppins'>
                Copyright © 2022 FontPage FreeBirds.com
            </div>
        </div>
    );
};

export default Footer;