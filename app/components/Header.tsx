"use client";
import React, { useState } from "react";
import Image from "next/image";
import { headerData } from "../data/data";
import { nanoid } from "nanoid";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Header() {
  const [cliked, setCliked] = useState(true);
  return (
    <header className="h-1/6 bg-black/40 flex justify-between items-center px-3 ">
      <div className=" w-24 h-9 sm:w-48 sm:h-16 brightness-90 opacity-95 cursor-pointer">
      <Image className="rounded-md"
        src={"/logo.png"}
        alt="logo"
        layout="fill"
      ></Image>
      </div>
      <div className="flex justify-between relative ">
        <ul className="hidden md:flex flex-wrap md:justify-end ">
          {headerData.titles.map((e) => (
            <li
              className="px-2 mx-1 text-xl text-myWhite cursor-pointer bg-slate-700 rounded-sm py-1 my-1 hover:bg-slate-800"
              key={nanoid()}
            >
              {e}
            </li>
          ))}
        </ul>

        <div className="flex md:w-80  justify-end ">
          <div className="text-blue-400 hover:text-blue-300 font-myFont underline  cursor-pointer text-md font-semibold md:text-xl">
            Login{" "}
          </div>
          <span className="text-white pt-[2px] px-1">/</span>
          <div className="text-blue-400 hover:text-blue-300 font-myFont underline cursor-pointer text-md font-semibold md:text-xl">
            Create Acount
          </div>
        </div>

        {cliked ? (
          <GiHamburgerMenu
            onClick={() => setCliked(!cliked)}
            className="md:hidden text-3xl ml-3"
          />
        ) : (
          <ImCross
            onClick={() => setCliked(!cliked)}
            className="md:hidden text-3xl ml-3"
          />
        )}
        {cliked ?<></>:<div className="absolute  bg-slate-400 opacity-80 md:hidden top-[50px] left-[50px] z-50">

        <ul className=" ">
          {headerData.titles.map((e) => (
            <li
              className="px-2 mx-1 text-xl text-myWhite cursor-pointer bg-slate-700 rounded-sm py-1 my-1 hover:bg-slate-800"
              key={nanoid()}
            >
              {e}
            </li>
          ))}
        </ul>

        </div>}
      </div>
    </header>
  );
}

export default Header;
