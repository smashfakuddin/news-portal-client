import React from 'react';
import top from '../img/topimage.jpg'

const TopNews = () => {
    return (
        <div className='
        absolute right-0 top-20 
         min-h-full p-6  hidden lg:block h-96'
        >
            <h1 className='mt-12 font-bold text-2xl border-b-2 mb-5'>Top News</h1>
            <div className=' text-gray-800'>
                <div className=' w-56 my-6'>
                    <h3 className='text-xl font-semibold'>One more dies of Dengue, 315 more hospitalised</h3>
                    <div className='grid grid-cols-2 gap-5'>
                        <p className='text-sm'>Dengue claimed one more life in the past 24 hours raising the death...</p>
                        <img src={top} alt="" width='150' />
                    </div>
                </div>
                <div className=' w-56 my-6'>
                    <h3 className='text-xl font-semibold'>Dengue death toll crosses 50</h3>
                    <div className='grid grid-cols-2 gap-5'>
                        <p className='text-sm'>Dengue claimed one more life in the past 24 hours raising the death...</p>
                        <img src={top} alt="" width='150' />
                    </div>
                </div>
                <div className=' w-56'>
                    <h3 className='text-xl font-semibold'>Mayor Taposh's effigy burnt over dengue menace</h3>
                    <div className='grid grid-cols-2 gap-5'>
                        <p className='text-sm'>Dengue claimed one more life in the past 24 hours raising the death...</p>
                        <img src={top} alt="" width='150' />
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default TopNews;