import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './Home.css'
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    const { data: likes = [], } = useQuery({
        queryKey: ['userwish'],
        queryFn: async => fetch('fackdata.json')
            .then(res => res.json())



    })
    return (
        <div className='text-center  text-white py-5'>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className='pt-7'  >
                <h1 className='text-3xl font-bold'>Hi ! This is Emam Hossain</h1>
                <h3 className='font-bold text-xl'>FrontEnd Developer</h3>
                <p className='text-white '>
                    I'm a Front End web Developer.
                    I Love to create Beautiful functional website.
                    The main objective when i working as a developer is to be productive and deliver value to the company.
                    As a developer my aim is to build practical applications that will be 100% successful.
                </p>
                <div className='flex mt-4 w-4/12 m-auto gap-5'>
                    <div>
                        <Link to='/details'> <button className='bg-gray-300 px-10 py-2 rounded-xl  text-black'> More Details </button> </Link>
                    </div>
                    <div className="btn-group mb-5">
                        <button
                            className='bg-gray-300 px-10 py-2 rounded-xl  text-black '
                            type="submit"
                            onClick={() => window.open("https://drive.google.com/file/d/1puIBaZUWBgTGH88JzLqUHGWkEjsx3PxI/view?usp=share_link")}
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-xl pt-20 uppercase'>My best few Projects</h1>
                <hr className='w-80 mx-auto'></hr>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 w-8/12 mx-auto gap-5 pr-5 md:pr-5 sm:pr-5 '>
                    {
                        likes.map(like => <div className='relative portfolio shadow-xl rounded-md'>
                            <div className=' h-[50vh] rounded-sm ml-6'>
                                <img className='w-[550px] h-[50vh] bg-center ' src={like.image} alt=''></img>
                            </div>
                            <div className=' hover-item w-full  h-[50vh] bg-gray-300 ml-6 absolute flex  items-center justify-center flex-col scale-0 opacity-0 transition-all left-0 top-0 ease-in-out rounded-sm' >
                                <h3 className='text-4xl text-black'>Project Source</h3>
                                <div >

                                    <div className='text-5xl mt-4 p-6 bg-black rounded-full text-white'>

                                        <a href={like.link} target='_blank'>
                                            <AiOutlineLink />
                                        </a>
                                    </div>

                                </div>
                                <p className="text-2xl font-bold text-black">{like.project_name} </p>
                                <p className='text-sm text-black text-justify px-2'>{like.description} </p>
                            </div>
                        </div>)
                    }



                </div>
            </div>
        </div>
    );
};

export default Home;