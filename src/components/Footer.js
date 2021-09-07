import React from 'react';

const Footer = () => {
    return (
        <div className='bg-green-300 p-3 text-center mt-5'>
            <small>Copyright © {new Date().getFullYear()} News Portal All right reserved..</small>
        </div>
    );
};

export default Footer;