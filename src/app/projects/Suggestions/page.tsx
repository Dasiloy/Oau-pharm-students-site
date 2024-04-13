import React from 'react'
import Image from 'next/image'
import { brands } from '@/app/articles/data'
const Suggestions = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-[4rem] lg:gap-[8rem]'>
<div className='  flex lg:flex-row flex-col lg:w-[70%] w-[90%] gap-[1rem] items-center justify-center mt-6 '>
<div className='flex flex-col items-center lg:items-start justify-center gap-6'>
<h2 className='font-bold text-[20px] lg:text-[40px] text-[#ECBB55]'>Suggestion Box</h2>
      < p className='text-dark-dark-100 text-[14px] lg:text-[18px] font-normal text-center lg:text-left  w-[80%]'><span className='font-extrabold'>The PANS OAU Executive </span> really appreciate your effort by abiding with laws
      and doing the right thing. However, we might not know some things you think we should more.
      That is why this platform is created so as to hear from you. Pharmacy Students may assist. Not only do you aid your society,
      but you also support the professionals that we will one day become. </p>
</div>
<Image src="/assests/rectangle31.png" alt='' width={250} height={250} className=' h-auto w-auto flex items-center justify-center ' />
</div>
<div className='flex hi flex-col lg:flex-row w-[70%] p-[1.5rem] lg:p-[4rem] gap-8 lg:items-center justify-center bg-[url("/assests/rectangle32.png")] '>
<div className='flex flex-col lg:gap-4 gap-2  '>
  <h2 className='font-bold text-[20px] lg:text-[40px] text-white' >Tell us what you think we don't know</h2>
  <p className='text-white text-[14px] lg:text-[18px] font-normal items-center justify-center  w-[80%]' >Do you have any question to ask us? Or do you want to put to our hearing what you think we don't
  know? Send a message </p>
</div>
<div className='flex flex-col lg:justify-center gap-4'>
  <input placeholder='Enter Your Full Name' type='text' className='border-[1px] rounded-lg text-dark-dark-75 w-full lg:w-[515px] lg:h-[65px] h-[40px] outline-none pl-2 lg:pl-4' />
  <input placeholder='Enter Your Mail' type='email'className='border-[1px] rounded-lg text-dark-dark-75 w-full lg:w-[515px] lg:h-[65px] h-[40px] outline-none pl-4 pl-2 lg:pl-4 ' />
  <input placeholder='Enter Your Phone number' type='number'className='border-[1px] rounded-lg text-dark-dark-75 w-full lg:w-[515px] lg:h-[65px] h-[40px] outline-none pl-4 pl-2 lg:pl-4 ' />
  <textarea placeholder='Message '  className='border-[1px] rounded-lg text-dark-dark-75 w-full lg:w-[515px] lg:h-[120px] h-[90px] outline-none   pl-2 lg:pl-4'></textarea>
  <button className=' rounded-md lg:w-[210px] bg-white lg:h-[65px] w-fit flex items-center justify-center p-[1rem] h-[40px] cursor-pointer font-semibold text-primary-500 text-[14px] lg:text-[16px] ease-in-out duration-500 border-[1px] '>Send Message</button>
</div>
</div>

    </div>
  )
}

export default Suggestions