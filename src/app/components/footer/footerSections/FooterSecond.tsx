import React from 'react'
import { CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import Image from 'next/image';
function FooterSecond() {
  return (
    <div className='grid grid-cols-1 gap-y-10 md:grid-cols-3 w-11/12 m-auto mt-10  pb-10'>
      <div>
        <div className='bg-white w-fit rounded-lg'>
          <div className='flex p-3 '>
            <Image
              src='/OauLogo.png'
              width={60}
              height={100}
              alt='oaulogo'
            />
            <Image
              src='/PansLogo.png'
              width={60}
              height={100}
              alt='oaulogo'
            />
          </div>
        </div>
        <div>
          <p className=' text-white text-md lg:text-lg leading-4 mt-5'>
            Pharmacy was first established as a Department in the former
            Nigerian College of Arts, Science and Technology, Ibadan Branch, in
            the year 1957. It, however, continued to award Diploma in Pharmacy
            till June 1965 while concurrently a programme for the B. Pharm.
            degree was started in September 1963
          </p>
        </div>
        <div className=' flex gap-x-5 mt-5'>
          <div className='flex bg-white rounded-full'>
            <CiFacebook
              color='purple'
              size='30px'
              className=''
            />
          </div>
          <div className='flex bg-white rounded-full'>
            <BsInstagram
              color='purple'
              size='30px'
              className=''
            />
          </div>
          <div className='flex bg-white rounded-full'>
            <RiTwitterXFill
              color='purple'
              className=' flex bg-white rounded-full'
              size='30px'
            />
          </div>
          <div className='flex bg-white rounded-full'>
            <BiLogoLinkedin
              color='purple'
              className=' flex bg-white rounded-full'
              size='30px'
            />
          </div>
          <div className='flex bg-white rounded-full'>
            <BsWhatsapp
              color='purple'
              className=' flex bg-white rounded-full'
              size='30px'
            />
          </div>
        </div>
      </div>
      <div className=' text-center'>
        <h1 className=' text-2xl font-extrabold text-white'>Quick Links</h1>
        <ul className='mt-5 text-md lg:text-lg leading-4 text-slate-100'>
          <li>Home</li>
          <li>About Us</li>
          <li>Activities</li>
          <li>Articles</li>
          <li>Project</li>
          <li>Support Us</li>
        </ul>
      </div>
      <div>
        <h1 className=' text-2xl font-extrabold text-white'>Contact Us</h1>
        <div className=' text-md lg:text-lg grid gap-y-5 mt-5 text-white'>
          <p>
            PANS Secretariat, inside Faculty of Pharmacy, Obafemi Awolowo
            University, Ile-Ife.
          </p>
          <p>+2349039539042, +2349039539042</p>
          <p>pansoau@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default FooterSecond