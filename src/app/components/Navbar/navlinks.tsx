"use client";
import React,{useState} from 'react'
import { links } from './mylinks';
import {AiFillCaretDown} from "react-icons/ai"
import {BiSolidUpArrow} from "react-icons/bi"
import { useRouter } from 'next/navigation';

const Navlinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [view, setview] = useState("");
  const [active, setactive] = useState("");
  const [open, setOpen] = useState("");
function viewed(val:string) {
setview(val)
if(val ===view){
setview("")
}
}
function icon(value:string) {
setHeading(value)
if(value === heading){
setHeading("")
}
}
const route = useRouter()
  return (
    <>
    <div>
    <div className='hidden lg:flex items-center justify-around'>
      <div className='flex items-center justify-center gap-3'>
        <img src='/assests/oau-logo.png' alt='oau' />
        <img src='/assests/pans-logo.png' alt='pans' />
      </div>
    <div className="md:flex hidden uppercase items-center justify-center gap-8 p-8 " >
    <div onClick={() => viewed("home")} className='flex items-center gap-3 justify-center cursor-pointer'>
    <h1
            onClick={() => setOpen("home")}>
<a onClick={() => route.push("/home")}  className={open === "home" ? " text-md font-normal flex items-center gap-3 justify-center text-primary-500 underline underline-offset-8" : "font-normal text-md gap-3 flex items-center justify-center text-dark-dark-100"} >
              Home
</a>
              </h1>
          </div>
      {links.map((link) => (
        <div>
          <div className="px-3  md:cursor-pointer group">
            <div onClick={() => viewed(link.name)} className={open === link.name ? " text-md font-normal flex items-center gap-3 justify-center text-primary-500 underline underline-offset-8" : "font-normal text-md gap-3 flex items-center justify-center text-dark-dark-100"} >
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
                          <li className="">
                            <a
                            onClick={() => setactive(slink.name)}
                              className={active===slink.name ? "text-md text-primary-500  font-normal" : "text-dark-dark-100 hover:text-primary-500"}
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
        </div>
      ))}
      <div onClick={() => viewed("articles")} className='flex items-center gap-3 justify-center cursor-pointer'>
    <h1 className={view === "articles" ? " text-md font-normal flex items-center gap-3 justify-center text-primary-500 underline underline-offset-8" : "font-normal text-md gap-3 flex items-center justify-center text-dark-dark-100"} >
              Articles
              </h1>
          </div>
          <div onClick={() => viewed("support")} className='flex items-center gap-3 justify-center cursor-pointer'>
    <h1 className={view === "support" ? " text-md font-normal flex items-center gap-3 justify-center text-primary-500 underline underline-offset-8" : "font-normal text-md gap-3 flex items-center justify-center text-dark-dark-100"} >
              Support Us
              </h1>
          </div>
      </div>
      </div>

      </div>
    </>
  );
};

export default Navlinks