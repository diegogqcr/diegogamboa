import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] min-h-screen w-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='text-sm tracking-widest text-gray-600 uppercase'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#0891b2]'> Diego</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/diegogamboaq/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer animate-bounce shadow-gray-400 hover:scale-110'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/djgqcr'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer animate-bounce shadow-gray-400 hover:scale-110'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer animate-bounce shadow-gray-400 hover:scale-110'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer animate-bounce shadow-gray-400 hover:scale-110'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
