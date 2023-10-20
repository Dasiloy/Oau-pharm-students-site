'use client';
import React, { useState } from 'react';
import { links } from './mylinks';
import { AiFillCaretDown } from 'react-icons/ai';
import { BiSolidUpArrow } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Navlinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [view, setview] = useState('');
  const [active, setactive] = useState('');

  function viewed(val: string) {
    setview(val);
    if (val === view) {
      setview('');
    }
  }
const selectionLink=()=>{

}
  return (
    <>
      <div className=' flex items-center justify-around'>
        <div className='flex items-center justify-center gap-3'>
          <img
            src='/assests/oau-logo.png'
            alt='oau'
          />
          <img
            src='/assests/pans-logo.png'
            alt='pans'
          />
        </div>
        <div className='md:flex hidden uppercase items-center justify-center gap-8 p-8 '>
          <div
            onClick={() => viewed('home')}
            className='flex items-center gap-3 justify-center cursor-pointer'>
            <Link
            href={'/'}
              className={
                view === 'home'
                  ? ' text-md font-normal flex text-primary-500 underline underline-offset-8'
                  : 'font-normal text-md flex text-dark-dark-100'
              }>
              Home
            </Link>
            {view === 'home' ? (
              <BiSolidUpArrow className='text-[15px]  text-primary-500' />
            ) : (
              <AiFillCaretDown className='text-[15px]' />
            )}
          </div>
          {links.map((link) => (
            <div>
              <div className='px-3  md:cursor-pointer group'>
                <div onClick={() => viewed(link.name)}>
                  <h1
                    className={
                      view === link.name
                        ? ' text-md font-normal flex items-center gap-3 justify-center text-primary-500 underline underline-offset-8'
                        : 'font-normal text-md gap-3 flex items-center justify-center text-dark-dark-100'
                    }
                    onClick={() => {
                      heading !== link.name
                        ? setHeading(link.name)
                        : setHeading('');
                      setSubHeading('');
                    }}>
                    {link.name}
                    <span className=''>
                      {heading === link.name ? (
                        <BiSolidUpArrow className='text-[15px]' />
                      ) : (
                        <AiFillCaretDown className='text-[15px]' />
                      )}
                    </span>
                  </h1>
                </div>
                {link.submenu && (
                  <div>
                    {
                      <div
                        className={
                          view === link.name
                            ? 'absolute mt-[1.5rem] '
                            : 'hidden'
                        }>
                        <div className='flex flex-row bg-white '>
                          {link.sublinks.map((mysublinks) => (
                            <div className='flex flex-col gap-4 p-6'>
                              {mysublinks.sublink.map((slink) => (
                                <li className=''>
                                  <Link
                                    href={slink.link}
                                    key={slink.name}
                                    onClick={() => setactive(slink.name)}
                                    className={
                                      active === slink.name
                                        ? 'text-md text-primary-500  font-normal'
                                        : 'text-dark-dark-100 hover:text-primary-500'
                                    }>
                                    {slink.name}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    }
                  </div>
                )}
              </div>
            </div>
          ))}
          <div
            onClick={() => viewed('support')}
            className='flex items-center gap-3 justify-center cursor-pointer'>
            <a
              className={
                view === 'support'
                  ? ' text-md font-normal flex text-primary-500 underline underline-offset-8'
                  : 'font-normal text-md flex text-dark-dark-100'
              }>
              Support Us
            </a>
            {view === 'support' ? (
              <BiSolidUpArrow className='text-[15px]  text-primary-500' />
            ) : (
              <AiFillCaretDown className='text-[15px]' />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navlinks;
