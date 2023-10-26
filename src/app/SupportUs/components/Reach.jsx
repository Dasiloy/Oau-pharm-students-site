'use client';
import React, { useState } from 'react';
import Button from '@/app/components/button/button';
function Reach() {
  const backgroundImageStyle = {
    backgroundImage: 'url(/ReachBackground.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Set the height you want
  };
  const text = 'send message';
  const displayProperties = ' text-fuchsia-800 bg-white';
  const inputDisplay = 'w-full rounded-lg h-14 p-5';
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phonenumber: '',
    message:''
  });
  const handleChange = (e) => {
    setInputValue({...inputValue ,[e.target.name]:e.target.value})
  };
  const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(inputValue)
  }
  return (
    <div className='md:mt-20 mt-14'>
      <div
        style={backgroundImageStyle}
        className='md:w-10/12 w-11/12 m-auto rounded-xl'>
        <div className=' grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 items-center'>
          <div className=' w-11/12 md:w-9/12 m-auto'>
            <h1 className='md:text-5xl text-4xl font-extrabold md:mt-0 mt-10 text-white'>
              Reach out to Us
            </h1>
            <p className='mt-5 text-xl text-white leading-4'>
              Do you have any quaestion to ask us? Or do you want to support us
              in any way? Send a message{' '}
            </p>
          </div>
          <div className='md:w-10/12 w-full md:mt-0 mt-5'>
            <form
              onSubmit={handleSubmit}
              className='grid gap-y-5'>
              <div>
                {' '}
                <input
                  className={`${inputDisplay}`}
                  placeholder='Enter Your Full Name'
                  name='name'
                  onChange={handleChange}
                  value={inputValue.name}
                />
              </div>
              <div>
                {' '}
                <input
                  className={`${inputDisplay}`}
                  placeholder='Enter Your Email'
                  value={inputValue.email}
                  onChange={handleChange}
                  name='email'
                />
              </div>
              <div>
                {' '}
                <input
                  className={`${inputDisplay}`}
                  placeholder='Enter Your Phone Number '
                  value={inputValue.phonenumber}
                  onChange={handleChange}
                  name='phonenumber'
                />
              </div>
              <div>
                <textarea
                  className=' h-32 w-full rounded-lg p-10 hover:p-3 open:p-3 '
                  placeholder='Message (Optional)'
                  onChange={handleChange}
                  value={inputValue.message}
                  name='message'
                />
              </div>
              <Button
                text={text}
                displayProperties={displayProperties}
                type='submit'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reach;
