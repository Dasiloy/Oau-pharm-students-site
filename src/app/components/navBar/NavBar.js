import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Image from "next/image";
function NavBar() {
  return (
    <div className="">
      <div className="grid grid-cols-2 p-3 items-center w-11/12 m-auto">
        <div className="flex gap-3">
          <div>
            <Image width={70} height={100} alt="navBAR" src="/OauLogo.png" />
          </div>
          <div>
            <Image width={60} height={100} alt="nav" src="/PansLogo.png" />
          </div>
        </div>
        <div className="flex justify-between w-full text-lg ">
          <div>
            <h1>Home</h1>
          </div>
          <div className="flex items-center">
            <h1>About us</h1>
            <AiFillCaretDown />
          </div>
          <div className="flex items-center">
            <h1>Activities</h1>
            <AiFillCaretDown />
          </div>
          <div>
            <h1>Articles</h1>
          </div>
          <div className="flex items-center">
            <h1>Projects</h1>
            <AiFillCaretDown />
          </div>
          <div>
            <h1>Support us</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
