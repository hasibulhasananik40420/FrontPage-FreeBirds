import React from 'react';

const TopBanner = () => {
    return (
        <section
            className="relative bg-[url('http://savedelete.com/wp-content/uploads/2015/03/Simple-Horizontal-Seamless-Pattern-For-Website-Background.jpg')] bg-cover bg-center bg-no-repeat"
        >
            <div className="h-[100vh] w-full lg:flex lg:justify-between lg:items-center mt-2">
                <div className='w-2/4 '>
                    <h1 className='text-4xl '>Got stuck? We will always be </h1>
                    <h1 className='text-4xl'>there for you.</h1>

                    <p className='pt-8'>ফ্রন্টএন্ড (HTML, CSS, JavaScript, ES6, bootstrap, React, charting), ব্যাকএন্ড (node, express, API), ডাটাবেজ (mongodb), ক্রোম ডেভ টুল, হোস্টিং, গিটহাব, ইন্টারভিউ প্রবলেম সলভিং - সবকিছু!</p>
                </div>
                <div className='w-2/4 justify-center'>
                    <img className='border-4  rounded-md' src="https://i.ibb.co/P9RLm07/Complete-Web-Design-Course.jpg" alt="" />
                </div>
            </div>

        </section>

    );
};

export default TopBanner;