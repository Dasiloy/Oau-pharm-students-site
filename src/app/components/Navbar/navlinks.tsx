"use client";
import React,{useState} from 'react'
import { links } from './mylinks';
import {AiFillCaretDown} from "react-icons/ai"
import {BiSolidUpArrow} from "react-icons/bi"
import { useRouter } from 'next/navigation';
import {AiOutlineMenu} from "react-icons/ai"
import {ImCross} from "react-icons/im"
import Link from 'next/link';
import Image from 'next/image';
const Navlinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [view, setview] = useState("");
  const [active, setactive] = useState("");
  const [open, setOpen] = useState("");
  const [nav, setnav] = useState(false);

function viewed(val:string) {
setview(val)
if(val === view){
setview("")
}
}
async function navigate(val:string) {
route.push(val),
setnav(!nav)
}




const route = useRouter()
  return (
    <>
    <div>

    <div className='flex lg:flex-row flex-col lg:justify-around py-[1rem]  lg:py-[0]'>
      <div className='flex lg:items-center lg:justify-center items-center  justify-between  lg:gap-3'>
<div className='flex flex-row gap-4 pl-3'>
        <Image width={80} height={80} src='/assests/oau-logo.png' alt='oau' className='h-auto w-auto' />
        <Image width={80} height={80} src='/assests/pans-logo.png' alt='pans' className='w-auto h-auto' />
</div>
        <div onClick={()=> setnav(!nav)} className='flex lg:hidden pr-[1rem] text-[20px] cursor-pointer text-primary-500 z-50'>
{nav === false ? <AiOutlineMenu/> : <ImCross />}
      </div>

      </div>
    <div className="lg:flex hidden  items-center justify-center gap-8 p-8 " >
    <div onClick={() => setview("home")} className='flex items-center gap-3 justify-center cursor-pointer'>
    <h1 className={view === "home" ? " text-[16px] font-normal flex items-center gap-3 justify-center text-primary-500 underline underline-offset-8" : "font-normal text-[16px] gap-3 flex items-center justify-center text-dark-dark-100"} >
              Home
              </h1>
          </div>
      {links.map((link) => (
        <div>

          <div className="px-3  md:cursor-pointer group">
            <div onClick={() => viewed(link.name)} className={view === link.name ? "  font-normal text-[16px] flex items-center gap-3 justify-center text-primary-500 underline underline-offset-8" : "font-normal text-[16px] gap-3 flex items-center justify-center text-dark-dark-100"} >
            <h1
            onClick={() => setOpen(link.name)}>
              {link.name}
              </h1>
{ link.submenu == true ?
              <span
              className="">
                      {
                        view === link.name
                            ? <BiSolidUpArrow className="text-[15px]  text-primary-500" />
                            : <AiFillCaretDown className="text-[15px]"/>
                          }
                    </span>
:
""              }

</div>
            {link.submenu && (
              <div>
                {
                <div className={view ===link.name ?"absolute mt-[1.5rem] " : "hidden"}>
                  <div className="flex flex-row bg-white ">
                    {link.sublinks && link.sublinks.map((mysublinks) => (
                      <div className='flex flex-col gap-4 p-6'>
                        {mysublinks.sublink.map((slink) => (
                          <li    className="">
                            <Link
                             href={slink.link}
                              className="text-dark-dark-100 hover:text-primary-500"
                            >
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
      <div onClick={() => route.push("/articles")}  className='flex items-center gap-3 justify-center cursor-pointer'>
    <h1 onClick={() => setview("articles")}  className={view === "articles" ? " text-[16px] font-normal flex items-center gap-3 justify-center text-primary-500 underline underline-offset-8" : "font-normal text-[16px] gap-3 flex items-center justify-center text-dark-dark-100"} >
              Articles
              </h1>
          </div>
          <div onClick={() => setview("support")} className='flex items-center gap-3 justify-center cursor-pointer'>
    <h1 className={view === "support" ? " text-[16px] font-normal flex items-center gap-3 justify-center text-primary-500 underline underline-offset-8" : "font-normal text-[16px] gap-3 flex items-center justify-center text-dark-dark-100"} >
              Support Us
              </h1>
          </div>
      </div>




<div className='lg:hidden block absolute w-full  h-full items-center justify-center   '>
<div  className={`
        lg:hidden bg-primary-500 flex flex-col relative gap-[2rem] top-[6%] h-full w-full  overflow-y-auto bottom-0 pt-[2rem]  pb-[3rem] pl-[5%]
        duration-500 ${nav ? "left-[-4.3%]" : "left-[-120%]"}
        `}>
<div onClick={() => setview("home")} className="px-3  md:cursor-pointer group">
    <h1 className={view === "home" ? 'flex flex-col  text-white text-[20px] font-extrabold underline underline-offset-4' : "flex flex-col  text-white text-[20px] font-extrabold " }>
              Home
              </h1>
          </div>
      {links.map((lin) =>(
<div className="px-3  md:cursor-pointer group">
            <div onClick={() => viewed(lin.name)} className='flex flex-row  justify-between' >
            <h1 className='flex flex-col  text-white text-[20px] font-extrabold '
            onClick={() => setOpen(lin.name)}>
              {lin.name}
              </h1>
{ lin.submenu == true ?
              <span
              className="">
                      {
                        view === lin.name
                            ? <BiSolidUpArrow className="text-[15px]  text-white" />
                            : <AiFillCaretDown className="text-[15px] text-white"/>
                          }
                    </span>
:
""              }
</div>
            {lin.submenu && (
              <div>
                {
                <div className={view ===lin.name ?" flex flex-col gap-1 ease-in-out pt-3" : "ease-in-out duration-1000 hidden "}>
                  <div className=" bg-white py-[1rem] h-full ">
                    {lin.sublinks && lin.sublinks.map((mysublinks) => (
                      <div className='flex flex-col gap-4 lg:p-6'>
                        {mysublinks.sublink.map((slink) => (
                          <li className="list-none pl-[1rem] text-primary-500 "  onClick={() => setactive(slink.name)}>
                            <a
                            onClick={() => navigate(slink.link)}
className={ active === slink.name ? "text-primary-500 underline underline-offset-4" : " text-primary-500"}
                            >
                              {slink.name}
                            </a>
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


      ))}
<div onClick={() => setview("articles")} className="px-3  md:cursor-pointer group">
    <h1 onClick={() =>navigate("/articles")} className='flex flex-col  text-white text-[20px] font-extrabold ' >
              Articles
              </h1>
          </div>
<div onClick={() => setview("support")} className="px-3  md:cursor-pointer group">
    <h1 className='flex flex-col  text-white text-[20px] font-extrabold ' >
              Support Us
              </h1>
          </div>
      </div>
      </div>
      </div>

      </div>
    </>
  );
};

export default Navlinks