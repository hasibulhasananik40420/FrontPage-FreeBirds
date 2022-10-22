import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
const FaqAccordion = ({ data }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <div onClick={() => { setVisible(!visible) }}
                style={{ backgroundColor: `${visible ? 'blue' : ''}` }}
                className='w-full  h-14 min-h-max mb-2 border-b lg:p-2 hover:bg-red-500 duration-500 text-black hover:text-white cursor-pointer'>
                <div className='p-2  w-full flex justify-between'>
                    {/* Question */}
                    <div>
                        <p className=' text-gray-200 lg:text-lg ' style={{ color: `${visible ? 'white' : 'black'}` }}>{data.question}</p>
                    </div>
                    {/* Icon */}
                    <div>
                        {
                            visible ? <MdOutlineKeyboardArrowUp className='text-2xl' style={{ color: `${visible ? 'white' : 'black'}` }} /> : <MdOutlineKeyboardArrowDown className='text-2xl' style={{ color: `${visible ? 'white' : 'black'}` }} />
                        }


                    </div>

                </div>
            </div>
            {/* Answar */}
            {
                visible
                &&
                <div className='p-2 w-full min-h-max duration-300 my-3'>
                    <p>{data.answar}</p>
                </div>
            }
        </div>
    );
};

export default FaqAccordion;