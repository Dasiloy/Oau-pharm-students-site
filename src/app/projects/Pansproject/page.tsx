import React from 'react'
import { promotions } from '../data'
import { brands } from '@/app/articles/data'
import Image from 'next/image'
const Pansproject = () => {
  return (
    <div  className='flex flex-col items-center justify-center gap-[3rem] lg:gap-[6rem]'>

      <div className='flex flex-col items-center justify-center gap-10 '>
      <div className='flex items-center justify-center bg-[url("/assests/rectangle9.png")] bg-cover bg-center h-[200px] lg:h-[500px] w-full'>
     <h1 className='font-extrabold text-[24px] lg:text-[56px] flex items-center justify-center text-white'>PROJECTS</h1>
     </div>
     <div className='flex flex-col  items-center justify-center gap-6'>
      <h2 className='font-bold text-[20px] lg:text-[40px] text-[#ECBB55]'>Pansite Project</h2>
      < p className='text-dark-dark-100 text-[14px] lg:text-[18px] font-normal items-center justify-center text-center w-[80%]'>This is created to cater for the walfare ,
      academics and social needs of PANSITES. By working together and supporting one another, we can create a more caring,
      compassionate and equitable society.makes an effort to ensure that her members are not only bookworms,
      but also have a good time. So, at PANS OAU, we organize a variety of social events such as hangouts, movie nights, parties,
      and other programs aimed at fostering social relationships. </p>
     </div>
</div>
<div className=' hidden lg:flex flex-col lg:flex-row items-center justify-center gap-[4rem]'>
  {promotions.map((promotion) => (
    <Image src={promotion.promotion} alt='avatars' width={300} height={300} className="" />
  ))}
</div>

<div className='flex flex-row justify-center gap-4 ml-4 lg:gap-6'>

<Image src='/assests/rectangle18.png' width={300} height={300} alt='avatar' className="flex items-center justify-center lg:w-[400px] lg:h-[400px] w-[100px] h-[100px]" />

<div className='grid items-center justify-center gap-3 lg:gap-6'>
<h2 className='font-bold text-[16px] lg:text-[40px] text-[#ECBB55]'>What exactly is the PANSITE Project for?</h2>
<p className='text-dark-dark-100 text-[12px] lg:text-[18px] font-normal items-center justify-center  w-[80%] lg:w-[80%]'>This is a project that is started by the current administration led by Isco. The aims are;</p>
<div className='flex  flex-col gap-4'>
<div className='flex flex-row items-center  gap-1 lg:gap-4'>
<Image src='/assests/book.png' alt='' height={30}  width={30} className='lg:p-2 p-0.5 bg-[#28145C] rounded-[50%]' />
<text className='text-dark-dark-100 text-[12px] lg:text-[18px] font-normal items-center justify-center  w-[100%] lg:w-[80%]'>Academic needs</text>
</div>
<div className='flex flex-row items-center gap-1 lg:gap-4'>
<Image src='/assests/pill.png'alt='' width={30} height={30} className='lg:p-2 p-0.5 bg-primary-500 rounded-[50%]' />
<text className='text-dark-dark-100 text-[12px] lg:text-[18px] font-normal items-center justify-center  w-[100%] lg:w-[80%]'>Welfare  needs</text>
</div>
<div className='flex flex-row items-center  gap-1 lg:gap-4'>
<Image src='/assests/people.png' width={30} height={30} alt='people' className='lg:p-2 p-0.5  bg-[#BD0808] rounded-[50%]' />
<text className='text-dark-dark-100 text-[12px] lg:text-[18px] font-normal items-center justify-center  w-[100%] lg:w-[80%]'>Social needs</text>
</div>
</div>
</div>
</div>

<div className='flex hi flex-col lg:flex-row w-[70%] p-[1.5rem] lg:p-[4rem] gap-8 items-center justify-center bg-[url("/assests/rectangle32.png")] '>
<div className='flex flex-col lg:gap-4 gap-2  '>
  <h2 className='font-bold text-[20px] lg:text-[40px] text-white' >Tell us what you want and we will help by solving it</h2>
  <p className='text-white text-[14px] lg:text-[18px] font-normal items-center justify-center  w-[80%]' >Do you have any quaestion to ask us? Or do you want to put to our hearing what you think we don't know? Send a message </p>
</div>
<div className='flex flex-col lg:justify-center gap-4'>
  <input placeholder='Enter Your Full Name' type='text' className='border-[1px] rounded-lg text-dark-dark-75 w-full lg:w-[515px] lg:h-[65px] h-[40px] outline-none pl-2 lg:pl-4' />
  <input placeholder='Enter Your Mail' type='email'className='border-[1px] rounded-lg text-dark-dark-75 w-full lg:w-[515px] lg:h-[65px] h-[40px] outline-none pl-4 pl-2 lg:pl-4 ' />
  <input placeholder='Enter Your Phone number' type='number'className='border-[1px] rounded-lg text-dark-dark-75 w-full lg:w-[515px] lg:h-[65px] h-[40px] outline-none pl-4 pl-2 lg:pl-4 ' />
  <textarea placeholder='Message '  className='border-[1px] rounded-lg text-dark-dark-75 w-full lg:w-[515px] lg:h-[120px] h-[90px] outline-none   pl-2 lg:pl-4'></textarea>
  <button className=' rounded-md lg:w-[210px] bg-white lg:h-[65px] w-fit flex items-center justify-center p-[1rem] h-[40px] cursor-pointer font-semibold text-primary-500 text-[14px] lg:text-[16px] ease-in-out duration-500 border-[1px] '>Send Message</button>
</div>
</div>
<div className='bg-[#DEC5D7] flex   items-center justify-center'>
<div className=' flex items-center justify-center w-[80%] py-[2rem] lg:py-[6rem]'>
  <div className=" gap-[1rem] lg:gap-0 flex flex-col lg:flex-row items-center justify-center ">
<div className=' grid  gap-3 lg:flex flex-col   '>
<h2 className='font-bold text-[20px] lg:text-[40px] text-primary-500  ' >Do something great to help others</h2>
<p className='text-dark-dark-100 text-[14px] lg:text-[18px] font-normal flex lg:items-center lg:justify-center w-[70%] ' >You can help us in this project.
However, we might not know some things you think we should more.
That is why this platform is created so as to hear from you. Pharmacy Students may assist. Not only do you aid your society,
but you also support the professionals that we will one day become. </p>
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



<div className='grid grid-cols-4 my-[2.5rem] lg:my-[5rem] gap-2  lg:gap-6'>
  {brands.map((brand) =>(
    <div className='flex flex-row '>
      <Image  height={250} width={250}  src={brand.brand} alt='brands'    />
    </div>
  ))}
</div>

    </div>
  )
}

export default Pansproject