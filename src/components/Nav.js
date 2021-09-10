import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../App';
import { FaUserCircle } from "react-icons/fa";


const Nav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <nav className='bg-white h-20 px-7 md:px-24 flex justify-between items-center shadow-sm z-50'>
            <div className=' '>
                <Link href="/home"><h1 className='text-3xl font-extrabold cursor-pointer text-gray-500'> News Portal</h1></Link>
                <p className=' text-sm font-semibold text-gray-400'>{new Date().toDateString()}</p>
            </div>
            <div className="px-4 cursor-pointer md:hidden" onClick={''}>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
            <div className='md:block flex hidden text-md text-gray-500 font-semibold'>
                <div className="flex items-center">
                    <Link to="/home" className='hover:text-black mr-5 border-b-2'>Home</Link>
                    <Link to="/admin" className='hover:text-black mr-5 '>Admin</Link>
                    {loggedInUser.isSignIn ?
                        <FaUserCircle className='text-3xl cursor-pointer' /> :
                        <Link to='/login' className='bg-green-400 px-3 py-2 rounded text-white'>Log in</Link>}
                </div>
            </div>
        </nav>
    );
};

export default Nav;