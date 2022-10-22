import React, { useEffect, useState } from 'react';
import FaqAccordion from '../../Components/Child/FaqAccordion';

const Faq = () => {
    const [faqs, setfaqs] = useState([])
    useEffect(() => {
        fetch('Faq.json')
            .then(res => res.json())
            .then(data => setfaqs(data))
    }, [])

    return (
        <div className='bg-gray-50 '>
            <div className='pt-12 mb-24 container mx-auto  p-4'>
                <div className='grid lg:grid-cols-2 py-10'>
                    <div className='pl-2 grid items-center'>
                        <div>
                            <img src="https://learnwithsumit.com/_next/static/media/faq.8116aa7d.svg" alt="" />
                            <h2 className="text-4xl font-bold">সচরাচর জানতে চাওয়া <br />
                                <span className='text-[#FFD000]'>প্রশ্নের উত্তর</span></h2>
                            <p>
                                আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি। আমাদের কে প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেয়ার অনুরোধ থাকলো। তাহলে আমাদের উত্তরের জন্য আপনাকে অপেক্ষা করতে হবেনা এবং আপনার মূল্যবান সময় বেঁচে যাবে।
                            </p>
                        </div>
                    </div>
                    {/* Accordion */}
                    <div className='overflow-y-scroll max-h-[450px] pl-2 csbar'>
                        {
                            faqs?.map(faq => <FaqAccordion key={faq.id} data={faq} />)
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;