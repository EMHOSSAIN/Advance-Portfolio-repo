import React from 'react';
import '../Home/Home.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'

const ContactPage = () => {
    return (
        <div>
          <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
           <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 w-8/12 m-auto h-[80vh] mt-32' >
           
        <div className=" mr-6 text-center ">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-4xl">Contact Me</h2>
          <hr></hr>
          <p className="mt-5 text-3xl leading-8 text-white">Get your Touch.</p>
          <p className='mt-4 text-white text-xl'>Email:<a href="mailto:me288715@gmail.com" target='_blank'>me288715@gmail.com</a></p>
          <p className='mt-4 text-white text-xl'>Mobile:(+880 1886855885)</p>
          <p className='flex justify-center gap-3 mt-3'>
            <a href='https://www.linkedin.com/in/emam-hossain23' target='_blank'>
              <BsLinkedin className='text-3xl text-white' />
            </a>
            <a href='https://t.me/EmamHossain85' target='_blank'>
              <BsTelegram className='text-3xl text-white' />
            </a>
            <a href='https://github.com/EMHOSSAIN' target='_blank'>
              <AiOutlineGithub className='text-3xl text-white' />
            </a>
          </p>
          <p className='text-white text-justify text-sm'>It is my pleasure that you want to contact me.
             pleasure 24/7 you can contact me. I optimize Your 
             call or message will actively contribute to my life.</p>
        </div>

        {/* form */}
        <div>
          <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>

              <input
                type="text"
                id="Name"
                name="name"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-4 px-2" placeholder='Name'
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-4 px-2" placeholder='Email'
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="Email" className="block text-sm font-medium text-white">
                Message
              </label>

              <textarea
                type="text"
                id="Email"
                name="message"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-2" placeholder='Message'
              />
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                className="inline-block shrink-0 rounded-md border bg-gray-300 px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Send
              </button>


            </div>
          </form>
        </div>

      </div>
        </div>
    );
};

export default ContactPage;