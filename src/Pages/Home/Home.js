import React from 'react';
import CourseDetails from './CourseDetails';
import Faq from './Faq';
import TopBanner from './TopBanner';


const Home = () => {
    return (
        <div>
            <TopBanner />
            <CourseDetails />
            <Faq/>
        </div>
    );
};

export default Home;