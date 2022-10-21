import React from 'react';

const TopBanner = () => {
    return (
        <section
            className="relative bg-[url('http://savedelete.com/wp-content/uploads/2015/03/Simple-Horizontal-Seamless-Pattern-For-Website-Background.jpg')] bg-cover bg-center bg-no-repeat"
        >
            <div className="container mx-auto lg:flex">
                <div className='w-2/4'>

                </div>
                <div className='w-2/4 justify-center'>
                    <img className='border-4  rounded-md' src="https://i.ibb.co/P9RLm07/Complete-Web-Design-Course.jpg" alt="" />
                </div>
            </div>

        </section>

    );
};

export default TopBanner;