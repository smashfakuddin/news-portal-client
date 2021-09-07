import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='flex-start md:flex md:flex-row flex-col list-none justify-around text-white bg-green-400 text-sm font-semibold  pl-8 py-4 shadow-sm items-center'>
            <li>
                <Link to='/bangladesh'>Bangladesh</Link>
            </li>
            <li>
                <Link to='/international'>International</Link>
            </li>
            <li>
                <Link to='/sports'>Sports</Link>
            </li>
            <li>
                <Link to='/opinion'>Opinion</Link>
            </li>
            <li>
                <Link to='/business'>Business</Link>
            </li>
            <li>
                <Link to='/ntertainment'>Entertainment</Link>
            </li>
        </div>
    );
};

export default Category;