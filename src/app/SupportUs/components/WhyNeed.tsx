import React from 'react';
import Image from 'next/image';
function WhyUs() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-11/12 md:w-10/12 m-auto mt-20'>
      <div className=''>
        <div>
          <h1 className='text-4xl text-orange font-bold'>
            Why we need your support?
          </h1>
          <p className='text-lg mt-10 leading-4'>
            <span className='font-bold'> PANS OAU nnnn</span> greatest asset is
            its hardworking and creative members. Quite simply, when you support
            us, you are helping to improve peoples health and overall
            well-being by helping in any community activities where Pharmacy
            Students may assist. Not only do you aid your society, but you also
            support the professionals that we will one day become.
          </p>
        </div>
        <div className='text-xl mt-5 font-bold text-blue-800 '>
          <h1 className='text-xl font-bold'>You can support PANS OAU by; </h1>
          <div className='leading-4'>
            <p className='text-lg mt-3'>Being our Partners</p>
            <p>Making Adverts</p>
            <p>Donation</p>
          </div>
        </div>
        <div className='text-lg mt-5 text-fuchsia-800'>
          <h1 className='text-2xl font-bold'>PANS OAU Bank Account</h1>
          <div className='leading-4 mt-3'>
            <p>
              <span className='font-bold'> Account Name:</span>
              Pharmaceutical Association of Nigeria Students, OAU Chapter
            </p>
            <p>
              <span className='font-bold'>Bank Name:</span>
              Access Bank PLC
            </p>
            <p>
              <span className='font-bold'> Account Number:</span>
              0033724878
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <Image
          alt='support'
          width={535}
          height={634}
          src='/support.png'
        />
      </div>
    </div>
  );
}

export default WhyUs;
