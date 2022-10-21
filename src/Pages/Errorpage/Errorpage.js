import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Errorpage = () => {
    return (
        <div>
            <Link to='/' className='pt-3 px-8 cursor-pointer flex gap-1 items-center'><span>Back to home page</span> <span><AiOutlineArrowRight></AiOutlineArrowRight></span></Link>
            <img src="https://miro.medium.com/max/1400/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="" />
        </div>
    );
};

export default Errorpage;