import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {FcBusinessContact} from 'react-icons/fc'

const Navbar = () => {
    return (
        <div className='fixed top-1/2 right-[3%] '>
            <Link className='p-5 bg-orange-400 w-14 h-14 flex items-center justify-center rounded-full' to = '/'> <AiFillHome className='text-green-800'></AiFillHome> </Link>
            <Link className='p-5 bg-orange-400 w-14 h-14 flex items-center justify-center rounded-full mt-1' to = '/about'> <FcAbout></FcAbout> </Link>
            <Link className='p-5 bg-orange-400 w-14 h-14 flex items-center justify-center rounded-full mt-1' to = '/contact'> <FcBusinessContact></FcBusinessContact> </Link>
            <Link className='p-5 bg-orange-400 w-14 h-14 flex items-center justify-center rounded-full mt-1' to = '/form'> <FcBusinessContact></FcBusinessContact> </Link>
        </div>
    );
};

export default Navbar;