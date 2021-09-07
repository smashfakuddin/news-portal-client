import React from 'react';

const Footer = () => {
    return (
        <div className='bg-green-300 p-3 text-center mt-5 text-gray-700  w-screen'>
            <small>Copyright © {new Date().getFullYear()} News Portal All right reserved..</small>
        </div>
    );
};

export default Footer;