import React, { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Navbar = () => {

    let [open, setOpen] = useState(false);


    return (
        <nav>
            <div className='shadow-sm w-full fixed top-0 left-0 z-50 border-b'>
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    <div className=' font-bold text-2xl cursor-pointer font-[Poppins] 
  text-white'>
                        <span className='flex items-center md:text-2xl text-xl  text-black mr-1 pt-2'>

                            <h1 className='font-bubble'>FontPage-FreeBirds</h1>
                        </span>



                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        <BiMenuAltLeft className='border border-[#0f172a] shadow rounded w-10 hover:border-[#6d28d9] duration-300' name={open ? 'close' : 'menu'}></BiMenuAltLeft>
                    </div>



                    <ul onClick={() => setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white text-black md:bg-white md:text-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 pr-6 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>


                        <li>
                            <Link to='/' className='md:ml-8 text-xl md:my-0 my-7 md:pb-0 hover:bg-black hover:py-1 hover:px-4 hover:text-white hover:rounded-md hover:duration-500 cursor-pointer block'>হোম</Link>
                        </li>

                        <li>
                            <Link to='/' className='md:ml-8 text-xl md:my-0 my-7 md:pb-0 hover:bg-black hover:py-1 hover:px-4 hover:text-white hover:rounded-md hover:duration-500 cursor-pointer block'>ব্লগ</Link>
                        </li>

                        <li>
                            <Link to='/' className='md:ml-8 text-xl md:my-0 my-7 md:pb-0 hover:bg-black hover:py-1 hover:px-4 hover:text-white hover:rounded-md hover:duration-500 cursor-pointer block'>ক্লাসসমুহ</Link>
                        </li>

                        <li>
                            <Link to='/' className='md:ml-8 text-xl md:my-0 my-7 md:pb-0 hover:bg-black hover:py-1 hover:px-4 hover:text-white hover:rounded-md hover:duration-500 cursor-pointer block'>সাপোর্ট
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='md:ml-8 text-xl md:my-0 my-7 md:pb-0 hover:bg-black hover:py-1 hover:px-4 hover:text-white hover:rounded-md hover:duration-500 cursor-pointer block'>রেজিস্ট্রেশন

                            </Link>
                        </li>







                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;