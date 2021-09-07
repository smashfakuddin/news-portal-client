import React from 'react';

const Login = () => {
    return (
        <div className='w-96 mx-auto  mt-5 py-24 border p-5'>
            <h3 className='text-center my-5 text-2xl font-semibold text-gray-700'>Login</h3>
            <div className='flex flex-col justify-center'>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="" placeholder='Enter Your Email' className='border-b-2'/>
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" placeholder='Enter Your Password' className='border-b-2'/>
                <input type="submit" value="Submit" className='mt-4 p-2 bg-green-300 text-gray-600 cursor-pointer' />
            </div>
            <div className=''>
                <button className='border p-3 w-full mt-5 bg-red-500 text-white'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;