import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Diego Gamboa | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        {/* <link rel='icon' href='/fav.png' /> */}
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Diego Gamboa</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/diegogamboaq/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/djgqcr'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <h5 className='text-center underline text-[18px] py-4'>
          INFORMATION COMING SOON
        </h5>
      </div>
    </>
  );
};

export default resume;
