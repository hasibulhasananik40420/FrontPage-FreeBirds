import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='py-6 bg-[#1E2B47]'>

            <div className='text-white md:flex md:justify-evenly w-full pl-8'>


                <div>
                    <h1 className='text-3xl font-medium pb-3'>FontPage FreeBirds</h1>
                    <div className='flex items-center gap-3 pb-2 text-xl'>
                        <CiLocationOn></CiLocationOn>
                        <p className='font-medium'> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    </div>
                    <div className='flex items-center gap-3 pb-2'>
                        <HiOutlineMail></HiOutlineMail>
                        <p className='cursor-pointer font-medium'> <span>Official:</span> <span className='hover:underline duration-300'> FontPage FreeBirds.com</span></p>
                    </div>
                    <div className='flex items-center gap-3 pb-2'>
                        <BsTelephone></BsTelephone>
                        <p className='font-medium cursor-pointer'> <span> Helpline :</span> <span className='hover:underline'>01790170749</span></p>
                    </div>

                    <div className='pb-2 font-medium'>

                        <p> (Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                    </div>
                    <div className='pt-4 pb-2 cursor-pointer'>
                        <img src="https://web.programming-hero.com/static/media/app-download.439edada.png" alt="" />
                    </div>

                </div>

                <div className='mt-4 md:mt-0 cursor-pointer'>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl'>Blogs</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl'>success</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl'>About us</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl'>Refund policy</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl'>Terms and Conditions</p>
                    </div>
                    <div className=' pb-2'>
                        <p className='hover:underline duration-300 text-xl'>Privacy & App Privacy Policy</p>
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


            <div className='text-sm font-medium text-center text-white mt-10'>
                Copyright © 2022 FontPage FreeBirds.com
            </div>
        </div>
    );
};

export default Footer;