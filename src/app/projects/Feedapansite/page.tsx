import React from 'react'
import { foodstuff } from '../data'
import Image from 'next/image'
import { brands } from '@/app/articles/data'
const Feedapansite = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[4rem] lg:gap-[8rem]'>
     <div className='flex flex-col items-center justify-center gap-10 '>
      <div className='flex items-center justify-center bg-[url("/assests/rectangle9.png")] bg-cover bg-center h-[200px] lg:h-[500px] w-full'>
     <h1 className='font-extrabold text-[24px] lg:text-[56px] flex items-center justify-center text-white'>PROJECTS</h1>
     </div>
     <div className='flex flex-col  items-center justify-center gap-2 lg:gap-3'>
      <h2 className='font-bold text-[20px] lg:text-[40px] text-[#ECBB55]'>Brief History Feed a PANSITE</h2>
      <h3 className='text-dark-dark-100 text-[14px] lg:text-[18px] font-extrabold items-center justify-center text-center w-[80%] lg:w-[100%]'>"There is nothing more beautiful than someone who goes out of their way to make life beautiful for others.” -  Mandy Hale</h3>
      < p className='text-dark-dark-100 text-[14px] lg:text-[18px] font-normal items-center justify-center text-center  w-[80%]'>
Dearest PANSites,<br></br>
We hope this message finds you well. By now no doubt we all have felt the impact of inflation and current economic downturn on our finances.
 However, some of us are less immune to the effects of inflation than others.
 This is why the Office of the Vice President in collaboration with the Dean,
 Faculty of Pharmacy have decided to launch this welfare program tagged: FEED A PANSITE
This program is aimed at PANSites adversely affected by the current economic and market realities.
The aim is to help you find your feet, and safely navigate your way through pharmacy school.
</p>
     </div>
</div>
<div className='  grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-[4rem]'>
  {foodstuff.map((promotion) => (
    <Image src={promotion.promotion} alt='avatars' width={300} height={300} className="" />
  ))}
</div>

<div >
  <div className=' flex flex-col gap-[2rem] lg:gap-[3rem] items-center justify-center'>
  <h1 className='font-bold text-[20px] lg:text-[40px] text-[#ECBB55] ml-[1rem] lg:ml-0 '>Are You A PANSITE In Need Of A Helping Hand?</h1>
<div className='flex flex-row lg:gap-4 lg:items-center lg:justify-center w-[90%] lg:w-[70%]'>
  <div className='grid gap-[1rem] lg:gap-[2rem]  '>
    <h3 className='text-dark-dark-100 text-[16px] lg:text-[28px] font-extrabold '>We stand to help Fellow PANSITE in<br></br> need of something</h3>
    < p className='text-dark-dark-100 text-[14px] lg:text-[18px] font-normal   w-[70%]'>
    If you are in need of a helping hand, kindly fill the form below.
Be rest assured that {""}
<span className='font-extrabold'>ALL SUBMISSION ARE 100% ANONYMOUS AND PRIVATE.</span><br></br>
If you are in need of a helping hand, kindly fill the form below.

</p>
<button className='flex items-center justify-center rounded-md w-[210px] bg-primary-500 h-[65px] cursor-pointer font-semibold text-white text-[16px] ease-in-out duration-500 border-[1px] hover:border-primary-500 hover:bg-transparent hover:text-primary-500'>Fill a Form</button>
  </div>
<div className='flex flex-row lg:items-center lg:justify-center'>

  <div className='flex flex-col'>
  <Image src="/assests/rectangle26.png" width={350} height={200} alt=''  />
  <Image src="/assests/rectangle27.png" width={350} height={200} alt=''  />
  </div>
  <div className='flex flex-col pb-[1rem] lg:pb-[3rem]'>
  <Image src="/assests/rectangle28.png" width={350} height={200} alt='' />
  <Image src="/assests/rectangle29.png" width={350} height={200} alt=''  />
  </div>
</div>
</div>
</div>
</div>

<div className='bg-[url("/assests/rectangle30.png")]  flex   items-center justify-center'>
<div className=' flex items-center justify-center w-[80%] py-[2rem] lg:py-[6rem]'>
  <div className=" gap-[1rem] lg:gap-0 flex flex-col lg:flex-row items-center justify-center ">
<div className='   gap-3 flex flex-col  lg:justify-center  '>
<h2 className='font-extrabold text-[20px] lg:text-[40px] text-white   ' >Do something great to help others</h2>
<p className='text-white text-[14px] lg:text-[18px] font-normal  lg:items-center lg:justify-center w-[100%] lg:w-[70%] ' >A program of this scale
cannot be run by one person singlehandedly. For those interested in assisting PANSites and serving humanity,
 By lending a helping hand,
Kindly <span className='text-[#ECBB55] items-center justify-center'>Contact Us </span></p>
<h3 className='text-white text-[14px] lg:text-[18px] font-extrabold  '>Or make payment into the Account number</h3>
</div>
<div className='bg-white rounded-md flex-col items-center justify-center'>
<div className='flex flex-col w-fit lg:w-[400px] px-[1rem] py-[1rem] gap-3 lg:py-[2rem] items-center justify-center '>
  <text  className='text-primary-600 text-[16px] lg:text-[24px]  font-bold'>PANS OAU Bank Account</text>
<text className='text-primary-600 text-[14px] lg:text-[18px] text-center font-bold'>Account Name : <span className='text-primary-300 text-[14px] lg:text-[18px] font-normal' >Pharmaceutical Association of Nigeria Students, OAU Chapter</span></text>
<text className='text-primary-600 text-[14px] lg:text-[18px] text-center font-bold'>Bank Name : <span className='text-primary-300 text-[14px] lg:text-[18px] font-normal' >Access Bank PLC</span></text>
<text className='text-primary-600 text-[14px] lg:text-[18px] text-center font-bold'>Account Number : <span className='text-primary-300 text-[14px] lg:text-[18px] font-normal' >0033724878</span></text>
</div>
</div>
</div>
</div>
</div>



      </div>
  )
}

export default Feedapansite