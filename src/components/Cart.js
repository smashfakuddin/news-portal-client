import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ news }) => {
    const { img, title, description } = news;
    return (
        <div className='w-full'>
            <img src={img} alt="" className='' />
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='text-gray-500 text-justify'>
                {description}
                <Link to='/' className='underline'>See More</Link>
            </p>
        </div>
    );
};

export default Cart;