import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {FcBusinessContact} from 'react-icons/fc'

const Navbar = () => {
    return (
        <div className='fixed top-1/4 right-[3%] '>
            <Link className='p-5 bg-gray-300 w-14 h-14 flex items-center justify-center rounded-full' to = '/' title='Home Page'> <AiFillHome className='text-green-800' ></AiFillHome> </Link>
            <Link className='p-5 bg-gray-300 w-14 h-14 flex items-center justify-center rounded-full mt-1' to = '/about' title='About Page'> <FcAbout className='text-green-800'></FcAbout> </Link>
            <Link className='p-5 bg-gray-300 w-14 h-14 flex items-center justify-center rounded-full mt-1' to = '/contact' title='Contact Page'> <FcBusinessContact className='text-green-800'></FcBusinessContact> </Link>
        </div>
    );
};

export default Navbar;