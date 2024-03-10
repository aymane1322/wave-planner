import React from "react";
import Image from "next/image";
import { headerData } from "../data/data";
import { nanoid } from "nanoid";

function Header() {
  return (
    <header className="h-1/6 bg-black/40 flex justify-between items-center px-3">
      <Image
        className="rounded-md w-150 h-50 brightness-90 opacity-95 cursor-pointer"
        src={"/logo.png"}
        alt="logo"
        width={150}
        height={100}
      ></Image>
      <div className="flex justify-between flex-wrap ">
        <ul className="hidden md:flex">
          {headerData.titles.map((e) => (
            <li className="px-2 mx-1 text-xl text-myWhite cursor-pointer bg-slate-700 rounded-sm py-1 hover:bg-slate-800" key={nanoid()}>{e}</li>
          ))}
        </ul>
        <div className="flex pl-7">
          <div className="text-blue-400 hover:text-blue-300 font-myFont underline  cursor-pointer text-lg font-semibold md:text-xl">Login  </div>
          <span className="text-white pt-[2px] px-1">/</span>
          <div className="text-blue-400 hover:text-blue-300 font-myFont underline cursor-pointer text-lg font-semibold md:text-xl">Create Acount</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
