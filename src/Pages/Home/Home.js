import React from 'react';
import CourseDetails from './CourseDetails';
import PrivateSupport from './PrivateSupport';
import TopBanner from './TopBanner';


const Home = () => {
    return (
        <div>
            <TopBanner />
            <CourseDetails />
            <PrivateSupport />
        </div>
    );
};

export default Home;