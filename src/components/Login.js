import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from './../App';

const firebaseApp = initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        img: '',
        email: '',
        password: '',
        error: '',
        success: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const auth = getAuth();
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                setUser(signedInUser);

            });
    }
    setLoggedInUser(user);
    return (
        <div className='w-96 mx-auto  mt-5 py-24 border p-5'>
            {newUser ? <h3 className='text-center my-5 text-2xl font-semibold text-gray-700'>Login</h3> :
                <h3 className='text-center my-5 text-2xl font-semibold text-gray-700'>SignUp</h3>}
            <div className='flex flex-col justify-center'>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder='Enter Your Email' className='border-b-2' />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Enter Your Password' className='border-b-2' />
                <input type="submit" value="Submit" className='mt-4 p-2 bg-green-300 text-gray-600 cursor-pointer' />
            </div>
            <div className=''>
                <button className='border p-3 w-full mt-5 bg-red-500 text-white' onClick={() => handleGoogleSignIn()}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;