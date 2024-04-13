import React from 'react'

function Download() {
  return (
    <div>
      <div className=' border-b border-b-white '>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center w-11/12 md:w-11/12 m-auto pt-10 md:pt-20 pb-10'>
          <div className=''>
            <h1 className=' text-white text-4xl md:text-5xl font-bold'>
              Download Pharmatel
            </h1>
            <p className=' text-slate-300 text-md lg:text-lg leading-4 mt-5'>
              You can download our Pharmatel Magazine which contains all
              activities{' '}
            </p>
          </div>
          <div className='md:w-9/12 w-full m-auto grid'>
            <form className='grid grid-cols-6 md:grid-cols-3 h-fit rounded-lg items-center bg-white'>
              <div className=' col-span-4 md:col-span-2'>
                <input
                  placeholder='Enter your email'
                  className='w-full h-16 text-md md:text-lg rounded-lg pl-3'
                />
              </div>
              <div className='flex justify-center col-span-2 p-3 md:col-span-1'>
                <button className=' bg-fuchsia-800 rounded-lg text-white'>
                  <h1 className='md:p-2 text-sm md:text-md p-1'>
                    Get your copy now
                  </h1>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download