import React,{useState} from 'react'
import Image from 'next/image'
import { health } from './data'
import { events } from './data'
import { special } from './data'
import { more } from './data'
import { brands } from './data'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
const Articles = () => {
  return (
      <div className='flex flex-col items-center justify-center gap-[3rem] lg:gap-[6rem]'>
     <div className='flex items-center justify-center bg-[url("/assests/rectangle9.png")] bg-cover bg-center h-[200px] lg:h-[500px] w-full'>
     <h1 className='font-extrabold text-[24px] lg:text-[56px] flex items-center justify-center text-white'>ARTICLES</h1>
     </div>
     <div className='flex flex-col gap-[1rem] lg:gap-[2rem] items-center justify-center'>
      <h2 className='font-bold text-[20px] lg:text-[40px] text-[#ECBB55]'>Our Articles</h2>
      < p className='text-dark-dark-100 text-[18px] font-normal items-center justify-center text-center w-[80%]'>PANS OAU makes an effort to ensure that her members are not only bookworms,
         but also have a good time. So, at PANS OAU, we organize a variety of social events such as hangouts, movie nights,
        parties, and other programs aimed at fostering social relationships.</p>
     </div>

     <div className='grid justify-center items-center px-[2rem] lg:w-[90%] gap-4'>
     <h1 className='font-bold  text-[32px] text-dark-dark-100 '>Health/Sciences</h1>
     <div className=' flex flex-col items-center justify-center gap-[3rem]'>
<div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 ' >
  {health.map((hlt)=>( <div className=''>
<div className=' flex flex-col gap-4'>
<Image src={hlt.artimg} alt='coverimg' height={500} width={650} className='' />
<Link href="/articles/article"><h2 className="font-semibold text-primary-500 x]text-[20px] cursor-pointer">{hlt.header}</h2></Link>
<p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>{hlt.text}</p>
<div className='flex flex-row  gap-2'>
  <Image src={hlt.author} width={50} height={50} alt="author's picture"/>
  <div className='flex flex-col '>
<h5 className='font-bold text-dark-dark-100 text-[16px]'>{hlt.authorname}</h5>
<h5 className='font-normal text-dark-dark-100 text-[12px]' >{hlt.role}</h5>
  </div>
   </div>
</div>
  </div>))}
</div>
<button className=' rounded-md w-[210px] bg-primary-500 h-[65px] cursor-pointer font-semibold
 text-white text-[16px] ease-in-out duration-500 border-[1px] hover:border-primary-500 hover:bg-transparent
  hover:text-primary-500'>Read More</button>
</div>
</div>

<div className='grid justify-center items-center px-[2rem] lg:w-[90%] gap-4'>
     <h1 className='font-bold  text-[32px] text-dark-dark-100 '>News/Events</h1>
     <div className=' flex flex-col items-center justify-center gap-[3rem]'>
<div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 ' >
  {events.map((hlt)=>( <div className=''>
<div className=' flex flex-col gap-4'>
<Image src={hlt.artimg} alt='coverimg' height={500} width={650} className='' />
<Link href="/articles/article"><h2 className="font-semibold text-primary-500 x]text-[20px] cursor-pointer">{hlt.header}</h2></Link>
<p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>{hlt.text}</p>
<div className='flex flex-row  gap-2'>
  <Image src={hlt.author} width={50} height={50} alt="author's picture"/>
  <div className='flex flex-col '>
<h5 className='font-bold text-dark-dark-100 text-[16px]'>{hlt.authorname}</h5>
<h5 className='font-normal text-dark-dark-100 text-[12px]' >{hlt.role}</h5>
  </div>
   </div>
</div>
  </div>))}
</div>
<button className=' rounded-md w-[210px] bg-primary-500 h-[65px] cursor-pointer font-semibold
 text-white text-[16px] ease-in-out duration-500 border-[1px] hover:border-primary-500 hover:bg-transparent
  hover:text-primary-500'>Read More</button>
</div>
</div>

<div className='grid justify-center items-center px-[2rem] lg:w-[90%] gap-4'>
     <h1 className='font-bold  text-[32px] text-dark-dark-100 '>News/Events</h1>
     <div className=' flex flex-col items-center justify-center gap-[3rem]'>
<div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 ' >
  {special.map((hlt)=>( <div className=''>
<div className=' flex flex-col gap-4'>
<Image src={hlt.artimg} alt='coverimg' height={500} width={650} className='' />
<Link href="/articles/article"><h2 className="font-semibold text-primary-500 x]text-[20px] cursor-pointer">{hlt.header}</h2></Link>
<p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>{hlt.text}</p>
<div className='flex flex-row  gap-2'>
  <Image src={hlt.author} width={50} height={50} alt="author's picture"/>
  <div className='flex flex-col '>
<h5 className='font-bold text-dark-dark-100 text-[16px]'>{hlt.authorname}</h5>
<h5 className='font-normal text-dark-dark-100 text-[12px]' >{hlt.role}</h5>
  </div>
   </div>
</div>
  </div>))}
</div>
<button className=' rounded-md w-[210px] bg-primary-500 h-[65px] cursor-pointer font-semibold
 text-white text-[16px] ease-in-out duration-500 border-[1px] hover:border-primary-500 hover:bg-transparent
  hover:text-primary-500'>Read More</button>
</div>
</div>


     <div className='grid justify-center items-center px-[2rem] gap-4'>
     <h1 className='font-bold  text-[32px] text-dark-dark-100 '>More Stories</h1>
     <div className=' flex flex-col items-center justify-center gap-[3rem]'>
<div className='grid lg:grid-cols-3 grid-row  items-center justify-center gap-8 ' >
  {more.map((mor)=>( <div className=''>
<div className=' flex flex-col gap-4'>
<Image height={500} src={mor.artimg} alt='coverimg' width={500} className='' />
<h2 className="font-semibold text-primary-500 x]text-[20px] cursor-pointer">{mor.header}</h2>
<p className='font-normal text-[14px] text-dark-dark-100 w-[90%]'>{mor.text}</p>
<div className='flex lg:flex-row  gap-2'>
  <Image height={50} src={mor.author} width={50} alt="author's picture"/>
  <div className='flex flex-col '>
<h5 className='font-bold text-dark-dark-100 text-[16px]'>{mor.authorname}</h5>
<h5 className='font-normal text-dark-dark-100 text-[12px]' >{mor.role}</h5>
  </div>
   </div>
</div>
  </div>))}
</div>
</div>
</div>

<div className='grid grid-cols-4 my-[2.5rem] lg:my-[5rem] gap-2  lg:gap-6'>
  {brands.map((brand) =>(
    <div className='flex flex-row '>
      <Image  height={300} width={300}  src={brand.brand} alt='brands'    />
    </div>
  ))}
</div>

</div>

  )
}

export default Articles