import React from 'react'

function FooterThird() {
  return (
    <div className='text-center'>
      <div>
        <h1 className='text-xl md:text-2xl font-bold mt-5 text-white'>
          PANS OAU © 2023. All rights reserved.
        </h1>
        <p className=' italic text-slate-50 mt-3'>
          Designed by: <span className=' text-orange'>RxQu@dri </span> Built by:
          <span className=' text-orange'>Baron</span> &
          <span className=' text-orange'> Dasiloy</span>
        </p>
      </div>
      <div className=' italic bg-fuchsia-800 text-lg md:text-xl text-white mt-5 pb-10 pt-5'>
        This website is funded and maintained by{' '}
        <span className=' text-orange'>Company</span>
      </div>
    </div>
  );
}

export default FooterThird