import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img1 from '../../../src/image/book.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='text-center  text-white'>
            <div className='pt-7'  >
                <h1 className='text-3xl font-bold'>Hi ! This is Emam Hossain</h1>
                <h3 className='font-bold text-xl'>FrontEnd Developer</h3>
                <p>
                    I'm a Front End web Developer.
                    I Love to create Beautiful functional website.
                    The main objective when i working as a developer is to be productive and deliver value to the company.
                    As a developer my aim is to build practical applications that will be 100% successful.
                </p>
                <div>
                    <Link to='/details'> <button className='bg-lime-400 px-20 py-2 rounded-xl mt-4 text-white'> More Details </button> </Link>
                </div>
            </div>

            <div>
                <h1 className='text-xl pt-20 uppercase'>My Project</h1>
                <hr className='w-80 mx-auto'></hr>
                <div className='grid grid-cols-2 mt-10 w-10/12 mx-auto gap-5 '>
                    <div className='relative portfolio shadow-xl'>
                        <div className='w-[83%] h-[50vh] rounded-sm ml-6'>
                            <img className='w-[550px] h-[50vh] bg-center ' src={img1} alt=''></img>
                        </div>
                        <div className=' hover-item w-[83%] h-[50vh] bg-lime-400 ml-6 absolute flex  items-center justify-center flex-col scale-0 opacity-0 transition-all left-0 top-0 ease-in-out rounded-sm' >
                            <h3 className='text-4xl text-white'>Project Source</h3>
                            <div >

                                <div className='text-5xl mt-4 p-6 bg-black rounded-full text-white'>

                                    <a href="" >
                                        <AiOutlineLink />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='relative portfolio shadow-xl'>
                        <div className='w-[83%] h-[50vh] rounded-sm ml-6'>
                            <img className='w-[550px] h-[50vh] bg-center ' src={img1} alt=''></img>
                        </div>
                        <div className=' hover-item w-[83%] h-[50vh] bg-lime-400 ml-6 absolute flex  items-center justify-center flex-col scale-0 opacity-0 transition-all left-0 top-0 ease-in-out rounded-sm' >
                            <h3 className='text-4xl text-white'>Project Source</h3>
                            <div >

                                <div className='text-5xl mt-4 p-6 bg-black rounded-full text-white'>

                                    <a href="" >
                                        <AiOutlineLink />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Home;