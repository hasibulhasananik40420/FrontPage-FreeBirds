import React from 'react';

const TopBanner = () => {
    return (
        <section
            className="bg-[url('https://learnwithsumit.com/_next/static/media/pattern-dark.20747baf.svg')]  min-h-[80vh] lg:flex items-center mt-16"
        >
            <div className=' p-10 container mx-auto lg:flex gap-6'>
                {/* text part */}
                <div className=" p-4  w-full">
                    <h3 className='text-lg mb-4  font-bold'>ওয়েব ডিজাইন বাংলা কোর্স</h3>
                    <h3 className='text-3xl font-bold mb-4'>Complete <span className='text-indigo-700'>Web Design </span>Course with Frontpage Freebirds</h3>
                    <h3 className='text-lg mb-4  font-bold'>HTML, CSS ,BOOTSTRAP,TAILWIND CSS , JAVASCRIPT , FIGMA. </h3>
                    <h3 className='text-lg'>HTML, CSS, ওয়েবসাইট লেআউট, রেসপন্সিভ ও ইন্ট্যারাক্টিভ ডিজাইনের মাধ্যমে ওয়েব ডিজাইনের জন্য প্রয়োজনীয় স্কিলের শেখার পাশাপাশি ওয়েব ডিজাইনার হিসেবে ক্যারিয়ার শুরু করার পরিপূর্ণ গাইডলাইন রয়েছে এই কোর্সে!
                    </h3>
                    <button className='my-4 py-2 px-4 rounded-full hover:bg-black hover:text-white cardShadow text-xl'>বিস্তারিত পড়ুন</button>
                </div>
                {/* Course Card */}
                <div className=" p-4 w-full">
                    <div className='lg:w-3/4 cardShadow rounded-md p-3 mx-auto'>
                        <img className='w-full rounded-md mb-3' src="https://i.ibb.co/P9RLm07/Complete-Web-Design-Course.jpg" alt="" />
                        <button className='mt-3 py-3 w-full text-lg text-white bg-indigo-600 rounded-md'>রেজিস্ট্রেশন করুন</button>
                        <div className="lg:flex  mt-3 ">
                            <div className='w-full p-2  flex'>
                                <img src="https://i.ibb.co/hCVKgkh/download-3.png" alt="" />
                                <h2 className='ml-2'>রেকর্ডিং ক্লাস</h2>

                            </div>
                            <div className='w-full p-2  flex'>
                                <img className='w-6' src="https://i.ibb.co/6ng06HN/1623043584898.png" alt="" />
                                <h2 className='ml-2'>লাইভ ক্লাস</h2>

                            </div>
                            <div className='w-full p-2  flex'>
                                <img src="https://i.ibb.co/9hRpfmf/download-4.png" alt="" />
                                <h2 className='ml-2'>এসাইনমেন্ট </h2>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-3xl font-bold pl-2' >৳ 1000</h3>
                        </div>

                    </div>
                </div>

            </div>


        </section>

    );
};

export default TopBanner;