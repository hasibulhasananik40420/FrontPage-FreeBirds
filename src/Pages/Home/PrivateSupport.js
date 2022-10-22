import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

const PrivateSupport = () => {
    return (
        <div className=''>
            <div className='p-12 container mx-auto lg:flex gap-32'>
                <div className='lg:w-2/4'>
                    <h1 className='text-4xl text-[#0f172a] font-bold mt-4'>সার্বক্ষণিক সহায়তার জন্য থাকছে</h1>
                    <h1 className='text-4xl text-[#6d28d9] font-bold mt-2'>প্রাইভেট সাপোর্ট গ্রুপ</h1>
                    <p className='mt-4'>এই কোর্সের জন্য আমরা একটি প্রাইভেট ফেসবুক গ্রুপ তৈরী করেছি যেখানে কোর্স ইন্সট্রাক্টর সুমিত সাহা সহ আরো 4-5 জন ওয়েব ডেভেলপার সরাসরি আপনাদের বিভিন্ন প্রশ্নের উত্তর দিবেন। আমরা অঙ্গীকার করছি সর্বোচ্চ ২৪ ঘণ্টার মধ্যে আপনাদের প্রশ্নের উত্তর দিতে পারবো। তবে অধিকাংশ ক্ষেত্রে তার চেয়েও কম সময়ে আপনারা উত্তর পেয়ে যাবেন। এছাড়া প্রতি সপ্তাহে আলোচিত মডিউলের উপর লাইভ সেশন থাকবে যেখানে আপনারা সরাসরি প্রশ্ন করে উত্তর পেতে পারবেন</p>

                    <div className='flex gap-6 mt-8'>
                        <button className='rounded-full px-3 py-2 bg-[#0f172a] flex items-center gap-2 hover:bg-[#3c4353] duration-300'>
                            <span><FaFacebookF className='text-white'></FaFacebookF> </span> <span className='text-white'>সাপোর্ট গ্রুপ</span>
                        </button>

                        <button className='rounded-full border px-3 py-2 bg-white flex items-center gap-2'>
                            <span><FaFacebookF className=' bg-transparent'></FaFacebookF> </span> <span className='text-[#334155]'>সাপোর্ট গ্রুপ</span>
                        </button>
                    </div>
                </div>

                <div className='lg:w-2/4 mt-12 lg:mt-0'>
                    <img className='lg:w-full lg:h-3/4 w-full ' src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1622956051167.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default PrivateSupport;